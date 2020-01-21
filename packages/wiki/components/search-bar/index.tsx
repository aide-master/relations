import React from 'react'
import { Input } from 'antd'
import router from 'next/router'
import './index.less'

const Search = Input.Search

const SearchBar: React.FC = () => {
  return (
    <Search
      className='search-bar'
      placeholder='search wiki'
      style={{ width: '300px' }}
      enterButton
      onSearch={async value => value && router.push({
        pathname: `/wikis/${value}`
      })}
    />
  )
}

export default SearchBar
