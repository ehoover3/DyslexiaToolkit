import * as React from "react";

export default function DyslexicFont() {
  return (
    <React.Fragment>
      <h2>1. Open Dyslexic Font</h2>

      <img
        src='images/font.png'
        alt='The letters ABC in dyslexic friendly font'
        style={{ width: "100%", padding: "5px", border: "3px solid #424242", backgroundColor: "#EEEEEE", borderRadius: "5px", height: "auto" }}
      />
      <ul>
        <li style={{ listStyleType: "none" }}></li>
        <li>Open Dyslexic Font is made for people with dyslexia</li>
        {/* <li>Add thickness to the bottom of letters, so that letters rotate less.</li> */}
        <li>Letters rotate less when the lower half of letters is thicker.</li>
        <li>You can add this font to Microsoft Word, Apple Pages, and more.</li>
        <li>
          Download the font at{" "}
          <a href='https://opendyslexic.org' target='_blank' rel='noopener noreferrer'>
            https://opendyslexic.org
          </a>
        </li>
        <br />
      </ul>
    </React.Fragment>
  );
}
