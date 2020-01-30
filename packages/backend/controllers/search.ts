import { APIGatewayProxyHandler } from 'aws-lambda'
import * as Joi from '@hapi/joi'
import { getWikiUrl, validate, rest, run, getLinksFromHtml } from '../utils'
import { getExtract } from '../services/wikipedia'
import Relation from '../models/relation'

export const search: APIGatewayProxyHandler = run(async (event, _context) => {
  const { word, lang } = validate(event.queryStringParameters || {}, Joi.object({
    word: Joi.string().required(),
    lang: Joi.string()
  }))

  let extract: string
  let relations: Array<[string, number]>
  const dbRec: any = await Relation.get({ name: word, lang })
  if (dbRec) {
    extract = dbRec.extract
    relations = (dbRec.relations || []).map(item => [item.key, item.value])
  } else {
    const url = getWikiUrl(word, lang)
    extract = await getExtract(word, lang)
    const htmlRes = await rest.get(url)
    const result = getLinksFromHtml(htmlRes.data, word)
    relations = Object.keys(result).sort((a, b) => result[b] - result[a]).map(item => [item, result[item]])
    if (extract && relations.length) {
      const rec = new Relation({ name: word, lang, extract, relations: relations.map(item => ({ key: item[0], value: item[1] })) })
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
