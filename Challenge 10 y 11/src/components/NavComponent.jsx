import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { LoginPage } from './LoginPage'
import { About } from './About'

export const NavComponent = () => {
  return (
    <div>
        <div className='Nav'>
            <Link to="/" className='Links'>Home</Link><br/>
            <Link to="/Login" className='Links'>Login</Link><br/>
            <Link to="/About" className='Links'>About</Link><br/>
        
        </div>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Login' element={<LoginPage/>} />
            <Route path='/About' element={<About/>} />
            
        </Routes>
    </div>
  )
}