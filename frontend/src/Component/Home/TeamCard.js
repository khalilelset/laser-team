import React from 'react'

const TeamCard = ({ name, definition, email, linkedin, imageUrl }) => {
  return (
    <div className="profile-card">
    <div className="profile-image-container">
      <img src={imageUrl} alt="Profile" className="profile-image" />
    </div>
    
    <h2 className="profile-name">{name}</h2>
    <p className="profile-definition">{definition}</p>
    <p className="profile-email">{email}</p>
    <a href={linkedin} className="profile-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
  )
}

export default TeamCard
