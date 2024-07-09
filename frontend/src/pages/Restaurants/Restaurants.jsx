import React from 'react'
import assets, { restaurant_list } from '../../assets/frontend_assets/assets.js'
import './Restaurants.css'

const Restaurants = () => {
  return (
    <div className='restaurants'>
        <p className='heading'>Restaurants All Around The World</p>
        <div className="restaurants-list">
            {restaurant_list.map((restaurant) => {
                    return (
                       <div className="restaurant-card" key={restaurant._id}>
                            <img src={restaurant.image} alt="" />
                            <div className="restaurant-title">
                                <b>{restaurant.name}</b>
                                <a href=""><img src={assets.rating_stars} alt="" /></a>
                            </div>
                            <p className='restaurant-desc'>{restaurant.description}</p>
                            <p>Destination: {restaurant.place}</p>
                            <p>Price: {restaurant.price}</p>
                            <div className="book">
                            <a href='/'>Book Now</a>
                            <b className='restaurant-category'>{restaurant.category}</b>
                            </div>
                        </div>
                    );
            })}
        </div>
    </div>
  )
}

export default Restaurants