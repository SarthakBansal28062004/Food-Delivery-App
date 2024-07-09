import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Collections from '../../components/Collections/Collections'
import Partners from '../../components/Partners/Partners'

const Home = () => {

    const [category, setCategory] = useState("All")

  return (
    <div>
        <Header/>
        <Collections/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Partners/>
    </div>
  )
}

export default Home