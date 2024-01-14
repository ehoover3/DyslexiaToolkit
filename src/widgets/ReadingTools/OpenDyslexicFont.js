import * as React from "react";

export default function DyslexicFont() {
  return (
    <React.Fragment>
      <h2>1. Open Dyslexic Font</h2>

      <ul>
        <li>This font weights the bottom of letters to reduce letter rotation</li>
        <li>This makes reading easier for people with dyslexia</li>
        <li>
          Download{" "}
          <a href='https://opendyslexic.org' target='_blank' rel='noopener noreferrer'>
            Open Dyslexic Font
          </a>
        </li>
        <br />
        <li style={{ listStyleType: "none" }}>
          <img src='images/font.png' alt='The letters ABC in dyslexic friendly font' style={{ width: "50%", height: "auto" }} />
        </li>
      </ul>

      <div></div>
      <div style={{ textAlign: "center" }}></div>
      <div></div>
    </React.Fragment>
  );
}
