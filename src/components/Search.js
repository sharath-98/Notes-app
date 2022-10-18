import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handleSearch}) {
  return (
    <div className='search'>
        <MdSearch className='search-area' size={'1.3em'}/>
        <input onChange={(e)=>handleSearch(e.target.value)} type="text" placeholder="Search..."/>
    </div>
  )
}

export default Search