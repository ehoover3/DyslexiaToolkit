import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='images/landingPage.jpg' />

      <h1 className='hero-container-relative-position'>DYSLEXIA TOOLKIT</h1>
      <p className='hero-container-relative-position'>Reading Made Easier</p>
      <div className='hero-btns hero-container-relative-position'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          EXPLORE TOOLS
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log("hey")}>
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
