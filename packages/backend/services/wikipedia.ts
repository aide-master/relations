import * as _ from 'lodash'
import { getWikiExtractsUrl, rest } from '../utils'
import { StringObject } from '../types'

export const getExtract = async (word: string, lang: string) => {
  const tmpMap = await getExtractMap([word], lang)
  return tmpMap[word]
}

export const getExtracts = async (words: string[], lang: string) => {
  const tmpMap = await getExtractMap(words, lang)
  return tmpMap
}

export const getExtractMap = async (words: string[], lang: string): Promise<StringObject> => {
  const url = getWikiExtractsUrl(words, lang)
  const jsonRes = await rest.get(url)
  const pages = _.get(jsonRes, 'data.query.pages') || {}
  const result: StringObject = Object.keys(pages).reduce((res: StringObject, key: string) => {
    const page: any = pages[key]
    res[page.title] = page.extract
    return res
  }, {})
  return result
}
