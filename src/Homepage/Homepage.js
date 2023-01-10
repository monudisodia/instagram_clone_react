import React, { useEffect, useState } from 'react'
import './Homepage.css'
import logo from ".././images/insta-logo.png"
import Post from "../Postfeed/Post"
import LogoutIcon from '@mui/icons-material/Logout';
import { db,auth } from '../Firebase'
import {collection,getDocs} from 'firebase/firestore'
import { signOut } from 'firebase/auth';

const Homepage = () => {

      
    const [posts,setPosts] = useState([]);

    useEffect(()=>{

        const callRef= collection(db,'posts');

       getDocs(callRef).then((snapshot)=>{
        let temp=[];
        snapshot.docs.forEach((doc)=>{
            temp.push({
                id: doc.id,
                ...doc.data()
                
            })
        });
          
        setPosts(temp);
       });
    },[]);

    return (
        <div className='homepage'>
            <div className='sidebar_container'>
                <div className='sidebar_top'>
                    <img className='sidebar_logo' src={logo} alt='logo' />
                </div>
                <div className='sidebar'>
                    <p className='para'>Home</p>
                    <p className='para'>Search</p>
                    <p className='para'>Reels</p>
                    <p className='para'>Messages</p>
                    <p className='para'>Notifications</p>
                    <p className='para'>Create</p>
                    <p className='para'>Profile</p>
                </div>
                <div className='sidebar_bottom'>
                 <button onClick={()=>signOut(auth)}><LogoutIcon/> <span>Log out</span> </button>
                </div>
            </div>

            <div className='middle'>
            {posts.map((post) =>(
                    <Post  username={post.username} caption={post.caption} imgURL={post.imgURL} />
                ))}
            </div>
            <div className='right'>
                

            </div>
        </div>

    )
}

export default Homepage;
