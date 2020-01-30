import { APIGatewayProxyHandler } from 'aws-lambda'
import * as Joi from '@hapi/joi'
import { validate, run } from '../utils'
import { getExtract } from '../services/wikipedia'

export const extract: APIGatewayProxyHandler = run(async (event, _context) => {
  const { word, lang } = validate(event.queryStringParameters || {}, Joi.object({
    word: Joi.string().required(),
    lang: Joi.string()
  }))
  const extract = await getExtract(word, lang)
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: 200,
      data: {
        extract
      }
    })
  }
})
