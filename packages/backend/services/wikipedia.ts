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
  // const jsonRes = {
  //   data: {
  //     batchcomplete: '',
  //     query: {
  //       redirects: [
  //         {
  //           from: '漢獻帝',
  //           to: '汉献帝'
  //         }
  //       ],
  //       pages: {
  //         15855: {
  //           pageid: 15855,
  //           ns: 0,
  //           title: '汉献帝',
  //           extract: '刘协（181年4月2日－234年4月21日），字伯和，是东汉政权最后一位皇帝，189年至220年在位，曹魏给其谥号为“孝献皇帝”，后世省略“孝”字称“汉献帝”。蜀汉给其谥号为“孝愍皇帝”。'
  //         }
  //       }
  //     }
  //   }
  // }
  const pages = _.get(jsonRes, 'data.query.pages') || {}
  const redirects = _.get(jsonRes, 'data.query.redirects') || []
  const result: StringObject = Object.keys(pages).reduce((res: StringObject, key: string) => {
    const page: any = pages[key]
    res[page.title] = page.extract
    return res
  }, {})
  for (const item of redirects) {
    result[item.from] = result[item.to]
  }
  return result
}
