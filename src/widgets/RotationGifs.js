import * as React from "react";

export default function HowItWorks() {
  return (
    <React.Fragment>
      <h2>Dyslexia Rotates Letters</h2>
      <ul>
        <li>People with dyslexia process information differently.</li>
        <li>Objects in their mind rotate in 3d space, including letters.</li>
        <li style={{ listStyleType: "none" }}>
          <img src='/gifs/gif1.gif' alt='Rotating Cup' style={{ width: "240px", height: "auto" }} />
          <img src='/gifs/gif2.gif' alt='Rotating Letter' style={{ width: "240px", height: "auto" }} />{" "}
        </li>
      </ul>
    </React.Fragment>
  );
}
