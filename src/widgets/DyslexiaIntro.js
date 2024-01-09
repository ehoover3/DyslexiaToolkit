import * as React from "react";

export default function DyslexiaIntro() {
  return (
    <React.Fragment>
      <h2>Understanding Dyslexia</h2>
      <div>Dyslexia is a barrier to learning to read, where objects rotate in their mind.</div>
      <div style={{ textAlign: "center" }}>
        <img src='/gifs/CupRotation.gif' alt='Rotating Cup' style={{ width: "240px", height: "auto" }} />
      </div>
      <br />
      <div>This includes letters too.</div>
      <div style={{ textAlign: "center" }}>
        <img src='/gifs/LetterRotation.gif' alt='Rotating Letter' style={{ width: "240px", height: "auto" }} />
      </div>
    </React.Fragment>
  );
}
