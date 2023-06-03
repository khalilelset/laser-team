import React from 'react'
import TeamCard from './TeamCard'
import personne from '../../images/personne.jpg'


const ContainerTeamCard = () => {
  return (<div className='containerbackground'>
  <div className='textTeam'>  <h1>team Section</h1><br/>
    <p>Discover the boundless possibilities of Craft Connect through our <br/>comprehensive website 
description page. 
</p></div>
    <div className='ContainerTeamCard'><br/><br/>
        {/* <Row className='my-2 d-flex justify-content-between'> */}
      <TeamCard name="khaled" definition="Full-stack Developer" email="khaled.khk.khaled@gmail.com" linkedin="linkin.com" imageUrl={personne}/>
      <TeamCard name="khaled" definition="Full-stack Developer" email="khaled.khk.khaled@gmail.com" linkedin="linkin.com" imageUrl={personne}/>
      <TeamCard name="khaled" definition="Full-stack Developer" email="khaled.khk.khaled@gmail.com" linkedin="linkin.com" imageUrl={personne}/>
      <TeamCard name="khaled" definition="Full-stack Developer" email="khaled.khk.khaled@gmail.com" linkedin="linkin.com" imageUrl={personne}/>
      <TeamCard name="khaled" definition="Full-stack Developer" email="khaled.khk.khaled@gmail.com" linkedin="linkin.com" imageUrl={personne}/>
   </div></div>
  )
}

export default ContainerTeamCard
