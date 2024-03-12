import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div id='tools' className='cards'>
      <h1>How Dyslexic Friendly Font Works</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem cursor='default' color='purple' src='images/objectRotation.png' label='Object Rotation' text='Dyslexia rotates objects in 3D space' alt='Dyslexia rotates object' path='/DyslexiasSimulator' />
            <CardItem cursor='default' color='purple' src='images/letterRotation.png' label='Letter Rotation' text='Unfortunately, dyslexia rotates letters when reading too' alt='Dyslexia rotates letter' path='/ScreenReader' />
            <CardItem cursor='default' color='purple' src='images/card-weightedLetter.png' label='Weighted Letters' text='However, text with weight at the bottom reduces rotation' alt='Dyslexic friendly font reduces rotation' path='/Future' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
