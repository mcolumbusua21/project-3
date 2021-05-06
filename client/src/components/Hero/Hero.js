import React from "react";
import "./Hero.css";


function Hero(props) {
  return (
    <>
      <div className="store">
        {props.children}
      </div>
    </>
  );
}

export default Hero;
