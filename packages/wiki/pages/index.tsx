import React from 'react'
import './index.css'
import SearchBar from '../components/search-bar'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src='/logo.svg' className='App-logo' alt='logo' />
        <SearchBar />
      </header>
    </div>
  )
}

export default App
