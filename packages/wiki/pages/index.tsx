import React from 'react'
import Head from 'next/head'
import SearchBar from '../components/search-bar'
import './index.less'

interface AppProps {
  lang: Lang
}

const App: React.FC<AppProps> = (props) => {
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

(App as any).getInitialProps = ({ query }) => {
  const lang = ['zh', 'en'].includes(query.lang) ? query.lang : 'en'
  return { lang }
}

export default App
