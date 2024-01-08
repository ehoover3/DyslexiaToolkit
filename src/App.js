// App.js
import React, { useState } from "react";
import "./App.css";
import UnderstandDyslexia from "./pages/UnderstandDyslexia";
import HowTheFontWorks from "./pages/HowTheFontWorks";
import MakeAPDF from "./pages/MakeAPdf";
import MoreResources from "./pages/MoreResources";
import AudioBooks from "./pages/AudioBooks";

function App() {
  const [activeSection, setActiveSection] = useState("pdf");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='AppContainer'>
      <div className='Sidebar'>
        <div>Learn More</div>
        <button className='SidebarButtonLearnMore' onClick={() => handleButtonClick("understand")}>
          UNDERSTAND DYSLEXIA
        </button>
        <button className='SidebarButtonLearnMore' onClick={() => handleButtonClick("font")}>
          HOW THE FONT WORKS
        </button>

        <div>Tools</div>
        <button className='SidebarButtonTools' onClick={() => handleButtonClick("pdf")}>
          MAKE A PDF
        </button>

        <div>External Resources</div>
        <button className='SidebarButtonResources' onClick={() => handleButtonClick("books")}>
          FREE AUDIO BOOKS
        </button>

        <button className='SidebarButtonResources' onClick={() => handleButtonClick("resources")}>
          MORE RESOURCES
        </button>
      </div>

      <div className='MainContent'>
        {activeSection === "understand" && <UnderstandDyslexia />}
        {activeSection === "font" && <HowTheFontWorks />}
        {activeSection === "pdf" && <MakeAPDF />}
        {activeSection === "books" && <AudioBooks />}

        {activeSection === "resources" && <MoreResources />}
      </div>
    </div>
  );
}

export default App;
