import React from 'react'
import { Input } from 'antd'

const Search = Input.Search

const SearchBar: React.FC = () => {
  return (
    <Search
      className='search-bar'
      placeholder='search wiki'
      style={{ width: '300px' }}
      enterButton
      onSearch={value => console.log(value)}
    />
  )
}

export default SearchBar
