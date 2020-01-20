import React from 'react'
import { Input } from 'antd'
import router from 'next/router'
import './index.less'

const Search = Input.Search

interface SearchBarProps {
  lang?: string
}

const SearchBar: React.FC<SearchBarProps> = (props = {}) => {
  const { lang = 'en' } = props
  return (
    <Search
      className='search-bar'
      placeholder='search wiki'
      style={{ width: '300px' }}
      enterButton
      onSearch={async value => value && router.push(`/${lang}/wikis/${value}`)}
    />
  )
}

export default SearchBar
