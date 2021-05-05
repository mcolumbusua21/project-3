import React from 'react'
import './Hero.css'
import Store from '../../assets/images/herbology.jpg'
import Form from '../Form/index'



function Hero(props) {
    return (
      <>
      <div className='store'>
      <img className='cover' src={Store} />
        <div className="box text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>
      
       
    
    <Form />
    </div>
   
    </>
    )
}


export default Hero
