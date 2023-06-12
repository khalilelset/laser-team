import React from "react";
import Navbar from "../../components/Navbar/HomePageNavBar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Features />
      <Team />
      <Contact />
    </div>
  );
};

export default HomePage;