import React from 'react'
import { Button } from 'antd'
import './index.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src='/logo.svg' className='App-logo' alt='logo' />
        <p>
          Edit <code>pages/index.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Button>
          hello world
        </Button>
      </header>
    </div>
  )
}

export default App
