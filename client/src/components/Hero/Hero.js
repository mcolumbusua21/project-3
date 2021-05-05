import React from 'react'
import './Hero.css'
import Store from '../../assets/images/herbology.jpg'
import Form from '../Form/index'




function Hero(props) {
    return (
      <>
      <div className='store'>
      <img className='cover' src={Store} alt=""/>
        <div className="box text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>

       
    <div className='store'>
      <img className='cover' src={Store} alt=""/>
      <Form />

    </div>
   </div>
    </>
    )
}


export default Hero
