import { APIGatewayProxyHandler } from 'aws-lambda'
import * as Joi from '@hapi/joi'
import { getWikiUrl, validate, rest, run, getLinksFromHtml } from '../utils'

export const search: APIGatewayProxyHandler = run(async (event, _context) => {
  const { word, lang } = validate(event.queryStringParameters || {}, Joi.object({
    word: Joi.string().required(),
    lang: Joi.string()
  }))
  const url = getWikiUrl(word, lang)
  const htmlRes = await rest.get(url)
  const result = getLinksFromHtml(htmlRes.data)
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: 200,
      data: result
    })
  }
})
