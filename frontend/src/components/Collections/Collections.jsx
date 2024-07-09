import React from 'react'
import './Collections.css'
import { assets } from '../../assets/frontend_assets/assets.js'
import {Link} from 'react-router-dom'

const Collections = () => {
  return (
    <div className='collections' id='collections'>
        <Link to={"/restaurants"}><h2>Restaurants 👈🏻</h2></Link>
        <p className='para'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
        <div className="collection-container">
            <div className="collection">
                <img src={assets.collection_1} alt="" />
                <h4>Best InstaWorthy Places</h4>
               
            </div>
            <div className="collection">
                <img src={assets.collection_2} alt="" />
                <h4>Top Trending Spots</h4>
                
            </div>
            <div className="collection">
                <img src={assets.collection_3} alt="" />
                <h4>Best of Live Screenings</h4>
                
            </div>
            <div className="collection">
                <img src={assets.collection_4} alt="" />
                <h4>Newly Opened Places</h4>
                
            </div>
            <div className="collection">
                <img src={assets.collection_5} alt="" />
                <h4>Celebrity Owned Places</h4>
                
            </div>
            <div className="collection">
                <img src={assets.collection_6} alt="" />
                <h4>Must Visit Places</h4>
               
            </div>
            <div className="collection">
                <img src={assets.collection_7} alt="" />
                <h4>Romantic Dining Places</h4>
                
            </div>
        </div>
    </div>
  )
}

export default Collections