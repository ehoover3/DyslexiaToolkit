import React from "react";

function ScreenReader() {
  return (
    <div>
      <h1>Screen Reader</h1>
      <div>A screen reader converts text and images to speech.</div>
      <div>Here are screen readers for different systems.</div>
      <ul>
        <li>Narrator is for Microsoft Windows.</li>
        <li>VoiceOver is for Apple</li>
        <li>Talkback is for Google's Android.</li>
        <li>ChromeVox is for Google's ChromeOS.</li>
        <li>VoiceView is for Amazon Android-based devices.</li>
        <li>Speakup and Orca are for Linux and Unix-like systems.</li>
      </ul>
    </div>
  );
}

export default ScreenReader;
