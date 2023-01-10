import React, { useState,useEffect } from 'react'
import './Login.css'
import img1 from "../images/img3.webp"
import img2 from "../images/insta-logo.png"
import img3 from "../images/face2.png"
import {auth} from '../Firebase'
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
// import { useNavigate } from 'react-router'
import Homepage from '../Homepage/Homepage'
import { useNavigate } from 'react-router'



const Login = () => {

  const [emailOrUsername,setEmailOrUsername] = useState("");
  const [password,setPassword] = useState("");

  const [user,setUser]= useState(null);

  const navigate= useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
  }, [user])


  const signIn= (e)=>{
    e.preventDefault();
      signInWithEmailAndPassword(auth,emailOrUsername,password)
      .catch((error)=>alert(error.message));

      //  navigate('/dashboard');
      setEmailOrUsername("");
      setPassword("");
  }
  return (
    <>{user?<Homepage/>:<div className='login_container'>
    <div className='login_left'>
       <img className='left_img' src={img1} alt='insta-banner' />
    </div>
    <div className='login_right'>
            
            <div className='login_logo'>
                <img className='login_logo_img'  src={img2} alt='logo' />
            </div>

            <input type='text' placeholder='username, or email' value={emailOrUsername}  onChange={(e)=>setEmailOrUsername(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={(e)=>signIn(e)} >Log in</button>
            <div className='hr_div'><hr/><span>Or</span><hr /></div>
            
            
            <div>
            <p style={{display:"flex",}}> <img className='p_logo' src={img3} alt='logo' /> 
            <span style={{marginLeft:"5px"}}>Log in with Facebook</span></p><br/>
            <p>Forgot Password?</p>
            </div>
            <hr style={{width:"80%"}}/>
            <p style={{marginBottom:"20px"}}>Don't have an Account? <span className='sign_up' onClick={()=>navigate("/signup")} >Sign up</span></p>
            
    </div>
  
</div>}
    </>
    
  )
}

export default Login
