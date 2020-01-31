import { APIGatewayProxyHandler } from 'aws-lambda'
import * as Joi from '@hapi/joi'
import { getWikiUrl, validate, rest, run, getLinksFromHtml } from '../utils'
import { getExtract } from '../services/wikipedia'
import Relation from '../models/relation'
import session from '../utils/session'

export const search: APIGatewayProxyHandler = run(async (event, _context) => {
  const { word, lang } = validate(event.queryStringParameters || {}, Joi.object({
    word: Joi.string().required(),
    lang: Joi.string()
  }))

  const requestId = session.get('requestId')

  let extract: string
  let relations: Array<[string, number]>
  console.time(`${requestId} - dynamodb query`)
  let dbRec: any = await Relation.get({ name: word, lang })
  console.timeEnd(`${requestId} - dynamodb query`)
  if (dbRec) {
    try {
      extract = dbRec.extract
      if (dbRec.relations) {
        relations = JSON.parse(dbRec.relations) || []
      }
    } catch (error) {
      console.error(error)
      dbRec = null
    }
  }
  if (!dbRec) {
    const url = getWikiUrl(word, lang)
    extract = await getExtract(word, lang)
    const htmlRes = await rest.get(url)
    const result = getLinksFromHtml(htmlRes.data, word)
    relations = Object.keys(result).sort((a, b) => result[b] - result[a]).map(item => [item, result[item]])
    if (extract && relations.length) {
      const rec = new Relation({ name: word, lang, extract, relations: JSON.stringify(relations) })
      await rec.save()
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: 200,
      data: {
        extract,
        relations
      }
    })
  }
})
