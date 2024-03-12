import React from "react";

function FriendlyFont() {
  return (
    <>
      <h1>Open Dyslexic Font</h1>
      <ul>
        <li style={{ listStyleType: "none" }}></li>
        <li>Open Dyslexic Font is made for people with dyslexia</li>
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
    </>
  );
}

export default FriendlyFont;
