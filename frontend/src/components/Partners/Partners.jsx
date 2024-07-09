import React from 'react'
import './Partners.css'
import assets from '../../assets/frontend_assets/assets'

const Partners = () => {
  return (
    <div className='explore-partners' id='partners'>
        <h1>Our Partners</h1>
        <p className='explore-partners-text'>Our dedicated food providers ensure fresh, high-quality meals delivered to your doorstep, bringing deliciousness straight from the kitchen to you.</p>
        <div className="explore-partners-list">
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.haldiram} alt="" />
                <p>Haldirams</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.burgerclub} alt="" />
                <p>Burger Club</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.burgerking} alt="" />
                <p>B. King</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.kfc} alt="" />
                <p>KFC</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.mcdonalds} alt="" />
                <p>Mc Donalds</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.tamra} alt="" />
                <p>Tamra</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.tacobell} alt="" />
                <p>Taco Bell</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.subway} alt="" />
                <p>Subway</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.spiceart} alt="" />
                <p>Spice Art</p>
            </div>
            <div className="explore-menu-list-item">
                <img className='item-partner-name' src={assets.baskinrobins} alt="" />
                <p>Baskins</p>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Partners