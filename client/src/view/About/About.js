import React from 'react'
import Navbar from './../../component/Navbar/Navbar'
import './About.css'
import ProfileImage from './../../assets/profile photo.JPG'

function About() {
  return (
    <>
      <Navbar />
      <div>
        <p className='about-welcome'> About Expenses Tracker</p>

        <div className='about-div'>
            <div className='about-text'>
            <span style={{color:'blueviolet',fontSize:'25px',fontWeight:'bold'}}>Expenses Tracker</span> is a user-friendly financial management application designed to help you take charge of your finances with confidence. Whether you're saving for a dream vacation, planning for a major purchase, or just aiming to build a robust financial foundation, Budget Buddy is here to guide you every step of the way.
            </div>
            <div className='profile'>
              <div className='profile-img-contanier'>
                <img src={ProfileImage} alt="Profile Image" className='profile-img'/>
              </div>
              <div className='profile-text'>
              I am a passionate <span style={{color:'blueviolet',fontWeight:'bolder',fontSize:'15px'}}>MERN stack web developer</span> who has developed this expense tracker to help those people who need to take control of their expenses or make savings. Connect With Me..
              </div>
            </div>
        </div>

      </div>

    </>
  )
}

export default About
