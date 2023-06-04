import React from 'react'
import NavBar from '../../Component/Utility/NavBar'
import Footer from '../../Component/Utility/Footer'
import HeroSection from '../../Component/Home/HeroSection'
import TeamCard from '../../Component/Home/TeamCard'
 import '../../style/Component/StyleHomePage.css'
import ContainerTeamCard from '../../Component/Home/ContainerTeamCard'
import Features from '../../Component/Home/Features'

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Features/>
      <ContainerTeamCard/>
      <Footer/>
     
    </div>
  )
}

export default HomePage
