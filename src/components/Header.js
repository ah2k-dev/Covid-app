import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='HeaderContainer'>
        <div className='LeftHeader'>
            <h2>Covid 19 Tracker</h2>
        </div>
        <div className='RightHeader'> 
            <Link to='/'>Home</Link>
            <Link to='/global'>Global</Link>
            <Link to='/countries'>Countries</Link>
        </div>
    </div>
  )
}

export default Header