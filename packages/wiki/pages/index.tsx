import React from 'react'
import Head from 'next/head'
import SearchBar from '../components/search-bar'
import './index.less'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getUserLocale } from 'get-user-locale'
import Footer from '../components/footer'

const App: NextPage = () => {
  const router = useRouter()
  let lang: Lang = 'en'
  if (['zh', 'en'].includes(router.query.lang as string)) {
    lang = router.query.lang as Lang
  } else {
    const userLocale = getUserLocale() || ''
    if (/^zh.*/.test(userLocale)) {
      lang = 'zh'
    }
  }
  return (
    <div className='App'>
      <Head>
        <title>Relations</title>
      </Head>
      <article className='App-content'>
        <img src='/logo.svg' className='App-logo' alt='logo' />
        <SearchBar
          lang={lang}
        />
      </article>
      <Footer lang={lang} />
    </div>
  )
}

App.getInitialProps = ({ res }) => {
  // set cachec-control
  if (res) {
    res.setHeader('Cache-Control', 'max-age=86400, public')
  }
  return {}
}

export default App
