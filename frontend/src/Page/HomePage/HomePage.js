import React from "react";
import Navbar from "../../components/Navbar/UserNavBar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Socket from "../../components/soketio/Socket";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Features />
      {/*<Team />*/}
      {/*<Socket/>
      <Contact />*/}

    </>
  );
};

export default HomePage;