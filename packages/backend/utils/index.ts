import * as Joi from '@hapi/joi'
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import axios, { AxiosRequestConfig } from 'axios'
import SocksProxyAgent from 'socks-proxy-agent'
import { AnyObject } from '../types'
import { parse } from 'node-html-parser'

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
    let result: APIGatewayProxyResult
    try {
      result = (await func(event, _context, callback)) as APIGatewayProxyResult
    } catch (error) {
      console.error('error: ', error)
      result = {
        statusCode: 200,
        body: JSON.stringify({
          code: 1,
          err: error
        }, null, 2)
      }
    }
    result.headers = Object.assign({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }, result.headers)
    return result
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

const wikiLinkRegexp = /href="\/wiki\/(?!Category:|Special:|Wikipedia:|Project:|Help:|Portal:|Task:|Template:)[^\s"]+"/

const getLinks = (node: any, links: AnyObject<number> = {}): AnyObject<number> => {
  if (node.tagName === 'a' && wikiLinkRegexp.test(node.rawAttrs)) {
    const key = (node.childNodes && node.childNodes[0] && node.childNodes[0].rawText) || null
    if (key) {
      links[key] = (links[key] || 0) + 1
    }
  }
  for (const child of node.childNodes || []) {
    getLinks(child, links)
  }
  return links
}

export const getLinksFromHtml = (html: string): AnyObject<number> => {
  const root = parse(html)
  return getLinks(root)
}
