import React from "react";
import "../../App.css";
import { useEffect } from "react";
import HeroSection from "../HeroSection";
import HowDyslexiaWorks from "../HowDyslexiaWorks";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "auto" });
      }
    }
  }, []);
  return (
    <>
      <HeroSection />
      <HowDyslexiaWorks />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
