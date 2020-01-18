import React from 'react'
import Head from 'next/head'
import './index.css'
import SearchBar from '../components/search-bar'

const App: React.FC = () => {
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

export default App
