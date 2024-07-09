import React from 'react'
import './Navbar.css'
import assets from '../../assets/admin_assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to={"/add"}><img className='logo' src={assets.admin_logo} alt="" /></Link>
        <img className='profile' src={assets.profile_image} alt="" />

    </div>
  )
}

export default Navbar