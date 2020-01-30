import React from 'react'
import Head from 'next/head'
import SearchBar from '../components/search-bar'
import './index.less'

const App: React.FC = (props) => {
  return (
    <div className='App'>
      <Head>
        <title>Relations</title>
      </Head>
      <header className='App-header'>
        <img src='/logo.svg' className='App-logo' alt='logo' />
        <SearchBar />
      </header>
    </div>
  )
}

(App as any).getInitialProps = ({ query }) => {
  return { lang: query.lang }
}

export default App
