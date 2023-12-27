import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'
import Image1 from './../../assets/Money stress-amico.png'
import { FaRocket } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image2 from './../../assets/Webinar-amico.png'
import { MdAddToPhotos } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Home() {
  return (
    <>
      <Navbar />
      <div className="area"  >
        <div className='sub-area' data-aos="zoom-out-up">
          <img src={Image1} alt="" className='img-home' />
        </div>
        <div className='sub-area'>
          <p><h1 className='welcome-title'>Welcome to Budget Buddy !</h1>
            <p className='text-area'>Our easy-to-use expense tracker lets you add, delete, and update transactions with a breeze. Set realistic budgets, gain insights into your spending, and stay in control. Whether you're a budgeting pro or just starting, Budget Buddy supports you every step of the way. Say goodbye to financial stress and hello to a more organized financial future!</p>
          </p>

         <Link to={'/signup'}> <button>Get Start <FaRocket /> </button></Link>
        </div>
      </div >
      <div className="area" data-aos="zoom-out-up" >
        <div className='sub-area'>
           <div className='box-contanier mt '  data-aos="fade-up">
            <div className='boxes'>
              <p className='icons'><MdAddToPhotos /></p>
              <p className='icon-text'>Add Your All Transactions</p>
            </div>
            <div className='boxes'>
            <p className='icons'><MdAssignment /></p>
              <p className='icon-text'>See Your All Transactions List</p>
            </div>
           </div>
           <div className='box-contanier'  data-aos="fade-up">
            <div className='boxes'>
            <p className='icons'><FaRegEdit /></p>
              <p className='icon-text'>Edit Your Transactions</p>
            </div>
            <div className='boxes'>
            <p className='icons'><MdDelete /></p>
              <p className='icon-text'>Delete Your Transactions</p>
            </div>
           </div>
        </div>
        <div className='sub-area'>
        <img src={Image2} alt="" className='img-home' />
      
        </div>
      </div >
    </>
  )
}

export default Home
