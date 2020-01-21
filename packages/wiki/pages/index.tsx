import React from 'react'
import Head from 'next/head'
import './index.less'
import SearchBar from '../components/search-bar'
import { Select } from 'antd'
import { useCookie } from '../hooks'

const { Option } = Select

const App: React.FC = (props) => {
  const [lang, setLang] = useCookie('lang', 'en')
  const handleSwitchLang = (val: string) => {
    setLang(val)
  }
  return (
    <div className='App'>
      <Head>
        <title>Relations</title>
      </Head>
      <header className='App-header'>
        <img src='/logo.svg' className='App-logo' alt='logo' />
        <div className='toolbar'>
          <Select value={lang} onChange={handleSwitchLang} className='lang-picker'>
            <Option value='en'>English</Option>
            <Option value='zh'>中文</Option>
          </Select>
          <SearchBar />
        </div>
      </header>
    </div>
  )
}

(App as any).getInitialProps = ({ query }) => {
  return { lang: query.lang }
}

export default App
