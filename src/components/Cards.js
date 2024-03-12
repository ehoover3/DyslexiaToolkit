import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div id='tools' className='cards'>
      <h1>Explore tools for dyslexia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='images/card-dyslexiaSimulator.jpg' label='Dyslexia Simulator' text='Experience a dyslexia simulation' alt='Dyslexia Simulator' path='/DyslexiaSimulator' />
            <CardItem src='images/card-screenReader.jpg' label='Screen Reader' text='Listen to the computer read text' alt='Screen Reader' path='/ScreenReader' />
            <CardItem src='images/card-audiobook.jpg' label='Audio Books' text='Listen to free audio books' alt='Audio Books' path='/Books' />
          </ul>

          <ul className='cards__items'>
            <CardItem src='images/card-openDyslexic.png' label='Dyslexic Friendly Font' text='Read font that rotates less' alt='Dyslexic Friendly Font' path='/FriendlyFont' />
            <CardItem src='images/card-browserHelp.jpg' label='Browser Help' text='Make web pages more accessible' alt='Browser Help' path='/BrowserHelp' />
            <CardItem src='images/card-keyboardPdfFile.jpg' label='PDF Maker' text='Build a PDF in dyslexic friendly font' alt='PDF Maker' path='/PdfMaker' />
            <CardItem src='images/card-futureIdeas.jpg' label='Future Ideas' text='Explore and contribute to future ideas' alt='Future Ideas' path='/Future' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
