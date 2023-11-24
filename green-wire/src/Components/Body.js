import React from 'react';
import logo from '../Assets/G.png'
import './Body.css'

const Body = () => {
return (
    <>
      <div className='main-content'>
        <div className='left-content'>
        <h1>WELCOME TO</h1>
        <h2>PROJECT</h2>
        <p><span id="mc-span">green</span>Wire.</p>
        </div>
        <div className='right-content'>
          <img src={logo} alt="logo"/>
        </div>
      </div> 
    </>
)
}

export default Body;