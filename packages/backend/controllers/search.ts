import { APIGatewayProxyHandler } from 'aws-lambda'
import * as Joi from '@hapi/joi'
import { getWikiUrl, validate, rest, run } from '../utils'

export const search: APIGatewayProxyHandler = run(async (event, _context) => {
  const { word, lang } = validate(event.queryStringParameters || {}, Joi.object({
    word: Joi.string().required(),
    lang: Joi.string()
  }))
  const url = getWikiUrl(word, lang)
  console.log({ url })
  const result = await rest.get(url)
  // const result = await rest.get('https://banyudu.com')
  console.log(result)
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: 200,
      data: result.data
    })
  }
})
