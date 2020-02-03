import React from 'react'
import Head from 'next/head'
import SearchBar from '../components/search-bar'
import './index.less'
import { NextPage } from 'next'

interface AppProps {
  lang: Lang
}

const App: NextPage<AppProps> = (props) => {
  return (
    <div className='App'>
      <Head>
        <title>Relations</title>
      </Head>
      <header className='App-header'>
        <img src='/logo.svg' className='App-logo' alt='logo' />
        <SearchBar
          lang={props.lang}
        />
      </header>
    </div>
  )
}

App.getInitialProps = ({ query, res }) => {
  const lang: Lang = ['zh', 'en'].includes(query.lang as string) ? query.lang as Lang : 'en'
  // set cachec-control
  if (res) {
    res.setHeader('Cache-Control', 'max-age=86400, public')
  }
  return { lang }
}

export default App
