import React from 'react'
import backimg from '../../assets/download.jpg'
import './HomeComponent.css'

const HomeComponent = () => {
  return (
    <div className="home-container">
        <div className="home-content">
            <h1 className="home-title">Welcome to Our College</h1>
         
    </div>
    
    <div className="image" >
    <img src={backimg} alt="" className="image" />

 </div>
 </div>
  )
}

export default HomeComponent
