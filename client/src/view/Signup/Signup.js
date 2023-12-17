import React, { useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import Navbar from '../../component/Navbar/Navbar'
function Signup() {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const [email,setEmail]=useState('')

    const[loginEmail,setLoginEmail]=useState('')
    const[loginPassword,setLoginPassword]=useState('')
  
   const userSignup= async()=>{

      try{
        const responce=await axios.post('/api/user/signup',{
            name:name,
            password:password,
            email:email
        })
        if(responce?.data?.success){
            alert(responce?.data?.message)
        }
       
      }catch(err){
        console.log(err.message)
      }
   }

   const userLogin = async()=>{
    try{
        const responce = await axios.post('/api/user/login',{
            email : loginEmail ,
            password : loginPassword
        })
        if(responce?.data?.success===true){
            alert(responce?.data?.message)
            localStorage.setItem('user',JSON.stringify(responce?.data?.data))
            window.location.href='/'
        }
        else{
            alert(responce?.data?.message)
        }
    }catch(err){
        alert(err.message)
    }
   }

   useEffect(()=>{
    const userData=JSON.parse(localStorage.getItem('user')||"{}")
    if(userData.email){
        window.location.href='/'
    }
   },[])

  return (
    <> 
    <Navbar/>   
    <div className='Contanier'>
     <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input 
                    type="text" 
                    value={name}
                    placeholder="User name" 
                    onChange={(e)=>{setName(e.target.value)}}
                    />
					<input 
                    type="email"  
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
					<input 
                    type="password" 
                    value={password}
                    placeholder="Password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
					<button  onClick={userSignup} type='button'>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input 
                    type="email"  
                    placeholder="Email" 
                    value={loginEmail}
                    onChange={(e)=>{setLoginEmail(e.target.value)}}
                    />
					<input 
                    type="password" 
                    placeholder="Password" 
                    value={loginPassword}
                    onChange={(e)=>{setLoginPassword(e.target.value)}}
                    />
					<button type='button' onClick={userLogin}>Login</button>
				</form>
			</div>
	</div>
    </div>
    </>

  )
}

export default Signup
