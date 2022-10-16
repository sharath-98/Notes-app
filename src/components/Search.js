import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search() {
  return (
    <div className='search'>
        <MdSearch className='search-area' size={'1.3em'}/>
        <input type="text" placeholder="Search..."/>
    </div>
  )
}

export default Search