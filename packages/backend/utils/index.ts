import * as Joi from '@hapi/joi'
import { APIGatewayProxyHandler } from 'aws-lambda'
import axios, { AxiosRequestConfig } from 'axios'
import SocksProxyAgent from 'socks-proxy-agent'

export const getWikiUrl = (word: string, lang: string = 'en'): string => {
  const host = `https://${lang}.wikipedia.org`
  return [host, 'wiki', encodeURIComponent(word)].join('/')
}

export const validate = (data: any, schema: Joi.AnySchema): any => {
  const result = schema.validate(data)
  if (result.error) {
    throw result.error
  }
  return result.value
}

type ControllerWrapper = (func: APIGatewayProxyHandler) => APIGatewayProxyHandler

export const run: ControllerWrapper = (func) => {
  return async (event, _context, callback) => {
    try {
      const result: any = await func(event, _context, callback)
      return result
    } catch (error) {
      console.error('error: ', error)
      return {
        statusCode: 200,
        body: JSON.stringify({
          code: 1,
          err: error
        }, null, 2)
      }
    }
  }
}

const axiosOptions: AxiosRequestConfig = {}
if (process.env.IS_OFFLINE) {
  const httpsAgent = new SocksProxyAgent({
    host: '127.0.0.1',
    port: 1086,
    protocol: 'socks5:',
    rejectUnauthorized: false
  })
  axiosOptions.httpAgent = httpsAgent
  axiosOptions.httpsAgent = httpsAgent
}

export const rest = axios.create(axiosOptions)
