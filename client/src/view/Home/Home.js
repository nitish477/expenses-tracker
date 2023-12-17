import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="context">
        <p>Empower Your Finances: Where Every Penny Finds Its Purpose.</p>
      </div>


      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </div>
  )
}

export default Home
