import React from "react";

function HelperBird() {
  return (
    <div>
      <h2>2. Helper Bird</h2>

      <div style={{ listStyleType: "none", display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%", paddingRight: "5px" }}>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>Standard</div>
          <div
            style={{
              fontFamily: "times new roman",
              width: "100%",
              padding: "5px",
              border: "3px solid #424242",
              backgroundColor: "#EEEEEE",
              borderRadius: "5px",
              height: "auto",
            }}>
            This is an example of standard font many websites use.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: "50%", paddingLeft: "5px" }}>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>Helper Bird</div>
          <div
            style={{ width: "100%", padding: "5px", border: "3px solid #424242", backgroundColor: "#EEEEEE", borderRadius: "5px", height: "auto" }}>
            This is an example of how Helper Bird changes font.
          </div>
        </div>
      </div>

      <ul>
        <li>Helper Bird changes all websites font to Open Dyslexic Font</li>
        <li>Helper Bird can also change the text size, letter spacing, line height, word spacing, and more</li>

        <li>
          Download Helper Bird at{" "}
          <a href='https://www.helperbird.com' target='_blank' rel='noopener noreferrer'>
            https://www.helperbird.com
          </a>
        </li>
        <br />
      </ul>
    </div>
  );
}

export default HelperBird;
