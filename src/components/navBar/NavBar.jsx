import React from 'react'
import './NavBar.css'

function NavBar () {
  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        <a href='' className='ul-a'><img className='ul-img' src='/src/assets/logo3.svg' alt='logo do aplicativo CUCO' /></a>
        <a href='' className='ul-a'> <li className='a-li'>Converter</li></a>
        <a href='' className='ul-a'> <li className='a-li'>FAQ</li></a>
        <a href='' className='ul-a'> <li className='a-li'>Contact</li></a>
      </ul>
    </nav>
  )
}

export { NavBar }
