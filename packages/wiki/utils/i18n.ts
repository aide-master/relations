import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh'],
  localeSubpaths: {
    en: 'en',
    zh: 'zh'
  }
})

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  Link,
  i18n,
  Router
} = NextI18NextInstance
