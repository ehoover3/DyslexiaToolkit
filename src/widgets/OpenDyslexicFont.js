import * as React from "react";

export default function DyslexicFont() {
  return (
    <React.Fragment>
      <h2>How The Font Works</h2>
      <div>Dyslexic friendly font puts a weight at the bottom of the characters to reduce letter rotation.</div>
      <div style={{ textAlign: "center" }}>
        <img src='images/abc.png' alt='The letters ABC in dyslexic friendly font' style={{ width: "50%", height: "auto" }} />
      </div>
      <div>
        Download this font at{" "}
        <a href='https://opendyslexic.org' target='_blank' rel='noopener noreferrer'>
          https://opendyslexic.org
        </a>
      </div>
    </React.Fragment>
  );
}