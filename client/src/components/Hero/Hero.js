import React from 'react'
import './Hero.css'
import Store from '../../assets/images/Store.jpg'
import Form from '../Form/index'



function Hero(props) {
    return (
      <>
        <div className="box text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>
      <Form />
       
    <div className='store'>
      <img className='cover' src={Store} />
    </div>
   
    </>
    )
}


export default Hero
