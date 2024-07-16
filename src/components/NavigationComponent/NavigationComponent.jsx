import React from 'react'
import {Route, Link, Routes, BrowserRouter as Router} from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import AboutComponent from '../AboutComponent/AboutComponent'
import EventComponent from '../EventComponent/EventComponent'
import DeptComponent from '../DeptComponent/DeptComponent'
import './NavigationComponent.css'




const NavigationComponent = () => {
  
  return (
    <>
    
    <div className="navbar">
        
        <Router>
            <nav>
                <ul className="bar">
                    <li ><Link className="link" to='/'>Home</Link></li>
                    <li ><Link className="link" to='/About'>About</Link></li>
                    <li ><Link className="link" to='/Dept'>Departments</Link></li>
                    <li ><Link className="link" to='/Event'>Event</Link></li>
                    
                </ul>
            </nav>
    
            <Routes>
                <Route path = '/' element={<HomeComponent/>}/>
                <Route path = '/About' element={<AboutComponent/>}/>
                <Route path = '/Event' element={<EventComponent/>}/>
                <Route path = '/Dept' element={<DeptComponent/>}/>

            </Routes>
        </Router>      
    </div>
    <Footer/>
    </>
    


  )

}
const Footer = () => (
    <footer className="footer">
      <p>&copy; 2024 Saveetha Engineering College. All rights reserved.</p>
    </footer>
)

export default NavigationComponent
