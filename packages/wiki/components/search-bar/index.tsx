import React from 'react'
import { Input, Select } from 'antd'
import router from 'next/router'
import './index.less'
import { useCookie } from '../../hooks'

const Search = Input.Search
const Option = Select.Option

interface SearchBarProps {
  defaultValue?: string
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { defaultValue = '' } = props
  const [lang, setLang] = useCookie('lang', 'en')
  const handleSwitchLang = (val: string) => {
    setLang(val)
  }
  return (
    <div className='tool-bar'>
      <Select value={lang} onChange={handleSwitchLang} className='lang-picker'>
        <Option value='en'>En</Option>
        <Option value='zh'>中文</Option>
      </Select>
      <Search
        className='search-bar'
        placeholder='search wiki'
        style={{ width: '300px' }}
        enterButton
        defaultValue={defaultValue}
        onSearch={async value => value && router.push({
          pathname: `/wikis/${value}`
        })}
      />
    </div>
  )
}

export default SearchBar
