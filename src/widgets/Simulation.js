import React from "react";

function Simulation() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Dyslexia Simulation</h2>
      <ul>
        <li>Watch this dyslexia simulation video.</li>
        <li>See how letters, words, and lines move.</li>
      </ul>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/j9fsb91VcEA'
        frameborder='0'
        allowfullscreen
        title='Dyslexia Simulation'></iframe>
    </div>
  );
}

export default Simulation;