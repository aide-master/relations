import React from 'react'
import { Input } from 'antd'
import router from 'next/router'

const Search = Input.Search

const SearchBar: React.FC = () => {
  return (
    <Search
      className='search-bar'
      placeholder='search wiki'
      style={{ width: '300px' }}
      enterButton
      onSearch={async value => router.push(`/wikis/${value}`)}
    />
  )
}

export default SearchBar
