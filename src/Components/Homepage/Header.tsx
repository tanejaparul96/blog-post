import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <span className='logo-style'>
              <Link to='/'>
        BLOG POST 
        </Link>
        </span>
        </div>
        <div className='menu-list-container'> 
        <ul>
    <li> About</li>
    <li> Blogs</li>
    <li> Links</li>
    <li><button> <Link to='/create'>Create</Link></button> </li>

        </ul>
        </div>
    </div>
  )
}
