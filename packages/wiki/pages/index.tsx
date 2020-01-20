import React, { useState } from 'react'
import Head from 'next/head'
import './index.less'
import SearchBar from '../components/search-bar'
import { Select } from 'antd'
import { useRouter } from 'next/router'
import { i18n } from '../utils/i18n'

const { Option } = Select

const validLang = ['en', 'zh']

interface AppProps {
  lang: string
}

const App: React.FC<AppProps> = (props) => {
  const defaultLang = validLang.includes(props.lang) ? props.lang : 'en'
  const [lang, setLang] = useState(defaultLang)
  const router = useRouter()
  const handleSwitchLang = async (val: string) => {
    setLang(val)
    await router.push(`/${val}`, undefined, { shallow: true })
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
          <SearchBar lang={lang} />
        </div>
      </header>
    </div>
  )
}

(App as any).getInitialProps = ({ req }) => {
  const lang = req ? req.language : i18n.language
  return { lang }
}

export default App
