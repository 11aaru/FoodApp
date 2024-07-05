import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import FoodDisply from '../../components/fooddisply/FoodDisply'
import AppDownload from '../../components/appDownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div><Header/>
    <ExploreMenu category ={category} setCategory={setCategory}/>
    <FoodDisply category ={category}/>
    <AppDownload/>
    </div>
  )
}

export default Home