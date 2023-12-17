import { useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'
import logout from './../../assets/logout.png'

 function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const userData=JSON.parse(localStorage.getItem('user')||"{}")

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        Expence-Tracker
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/transation'>Transition</Link>
          </li>
         
          <li>
            <Link to='/about'>About</Link>
          </li>
        {
            userData.email? null:<><li>
            <Link to='/signup'>Signup</Link>
          </li></>
        }
          <li>
          Hello {userData.name ? userData.name:"User!"}
          </li>
          <li>
         {userData.email ? <>
           <span className="logout"
            onClick={()=>{localStorage.removeItem('user')
        window.location.href='/signup'
        }}
           ><img src={logout} alt="" className="logout-img" /></span>
         </>:null}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar