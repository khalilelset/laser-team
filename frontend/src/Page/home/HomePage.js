import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Services from '../../components/Services/Services'
import Features from '../../components/Features/Features'
import Team from '../../components/Team/Team'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <Services />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
