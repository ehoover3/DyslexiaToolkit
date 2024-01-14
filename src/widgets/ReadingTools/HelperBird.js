import React from "react";

function HelperBird() {
  return (
    <div>
      <h2>2. Helper Bird</h2>
      {/* <a href='https://www.helperbird.com' target='_blank' rel='noopener noreferrer'>
        https://www.helperbird.com
      </a> */}
      <ul>
        <li>Helper Bird changes all websites font to Open Dyslexic Font</li>
        <li>Helper Bird can also change the text size, letter spacing, line height, word spacing, and more</li>

        <li>
          Download{" "}
          <a href='https://www.helperbird.com' target='_blank' rel='noopener noreferrer'>
            Helper Bird
          </a>
        </li>
        <br />
        <li style={{ listStyleType: "none", display: "flex" }}>
          <img
            src='images/HelperBirdOff.png'
            alt='Example of a website with Helper Bird turned off'
            style={{ width: "50%", height: "100%", outline: "3px solid #e0e0e0" }}
          />
          <img
            src='images/HelperBirdOn.png'
            alt='Example of a website with Helper Bird turned on'
            style={{ width: "50%", height: "100%", outline: "3px solid #e0e0e0" }}
          />
        </li>
      </ul>
    </div>
  );
}

export default HelperBird;
