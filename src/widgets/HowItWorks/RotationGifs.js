import * as React from "react";

export default function HowItWorks() {
  return (
    <React.Fragment>
      <h2>1. Dyslexia Rotates</h2>
      <div>
        <img src='/gifs/gif1.gif' alt='Rotating Cup' className='rotationImg' />
        <img src='/gifs/gif2.gif' alt='Rotating Letter' className='rotationImg' />
      </div>
      <ul>
        <li>People with dyslexia mentally rotate objects and letters</li>
        <li>This makes it more difficult to read</li>
      </ul>
    </React.Fragment>
  );
}
