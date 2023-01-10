import React, { useEffect, useState } from 'react'
import './Signup.css'
import img1 from '.././images/insta-logo.png'

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import {auth} from '../Firebase'
import Homepage from '../Homepage/Homepage'
import { useNavigate } from 'react-router'

const Signup = () => {

  const [email,setEmail] = useState("");
  const [fullName,setFullName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [user,setUser] = useState(null);

  const navigate= useNavigate();

   const signUp =(e)=>{
            e.preventDefault();
            
           createUserWithEmailAndPassword(auth,email,password)
           .then((authUser)=>{

            return authUser.user.updateProfile({
              displayName:username,
            })
           })
            .catch((error)=>{
              if(fullName==="" || username==="") {
                alert("Please enter valid Details!");
              }else{
                   alert(error.message);
              }
            })
  }

  useEffect(()=>{
    onAuthStateChanged(auth,authUser=>{

      if(authUser){
        setUser(authUser);

        if(authUser.displayName){

        }else{
          return authUser.providerData({
            displayName:username,
          })
        }
      }else{
        setUser(null);
      }
    })
  },[user,username])


  return (
    <>
    {user?<Homepage/>:<div className='signup_container'>
            
            <div className='signup'>
                 <div>
                    <img className='img_logo' src={img1} alt='logo'/>
                 </div>
                 <p className='para1'>Sign up to see photos and<br/> videos from your friends.</p>
                 <button>Log in with Facebook</button>
                 <div className='hr_div'><hr/><span>Or</span><hr /></div>

                 <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                 <input type='text' placeholder='Full name' value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                 <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <p className='para2'>People who use our service may have uploaded<br/> your contact information to Instagram.</p>
                <p className='para3'>By signing up, you agree to our <span>Terms,<br/> Privacy Policy</span> and <span>Cookies Policy.</span> </p>
                
                <button onClick={(e)=>signUp(e)} >Sign up</button>
                
                <hr style={{width:"85%"}}/>
                <p className='para4'>Have an Account? <span onClick={()=>navigate('/')}>Log in</span></p>
            </div>
            
    </div>}
    </>
  )
}

export default Signup
