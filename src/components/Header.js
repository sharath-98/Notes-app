import React from 'react'

function Header({handleMode}) {
  return (
    <div className='header'>
    <h1>Notes</h1>
    <button className='save' onClick={()=>handleMode((prevMode)=>!prevMode)}>Toggle Theme</button>
    </div>
  )
}

export default Header