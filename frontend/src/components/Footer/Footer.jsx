import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import assets from '../../assets/frontend_assets/assets.js'

const Footer = () => {
  return (
      <div className="footer" id='footer'>
      <div className="footer-title">
        <h1>FoodFleet</h1>
      </div>
      <div className="footer-container">
        <div className="footer-about">
          <p>About Us</p>
          <ul className='list'>
            <li>Who We Are</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            
          </ul>
        </div>
        <div className="food-verse">
          <p>FoodFleeverse</p>
          <ul className="list">
            <li>FoodFleet</li>
            <li>Home</li>
            <li>Restaurants</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="learn-more">
          <p>Learn More</p>
          <ul className="list">
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Site-Map</li>
          </ul>
        </div>
        <div className="footer-socials">
          <p>Social Links</p>
          <div className="icons">
            <img src={assets.linkedin} alt="" />
            <img src={assets.facebook} alt="" />
            <img  className="insta" src={assets.instagram} alt="" />
            <img src={assets.twitter} alt="" />
          </div>
          <div className="apps">
          <img className='app_store' src={assets.play_store} alt="" />
          <img className='app_store' src={assets.app_store} alt="" />
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2024 © FoodFleet. All rights reserved.</p>
      </div>
      </div>
  )
}

export default Footer