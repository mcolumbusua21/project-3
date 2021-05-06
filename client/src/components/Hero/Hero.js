import React from "react";
import "./Hero.css";
import Store from "../../assets/images/herbology.jpg";
import Form from "../Form/index";

function Hero(props) {
  return (
    <>
      <div className="store">
    
       
          {props.children}
        
          <Form
            handleChange={props.onChange}
            onFormSubmit={props.onFormSubmit}
          />

  
      </div>
    </>
  );
}

export default Hero;
