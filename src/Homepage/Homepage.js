import React, { useEffect, useState } from 'react'
import './Homepage.css'
import logo from ".././images/insta-logo.png"
import Post from "../Postfeed/Post"
import LogoutIcon from '@mui/icons-material/Logout';
import { db,auth } from '../Firebase'
import {collection,getDocs} from 'firebase/firestore'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';

const Homepage = () => {

      
    const [posts,setPosts] = useState([{
        caption:"this is the way",
        imgURL:"https://images2.alphacoders.com/130/1301855.jpg",
        username:"monu"
    },
    {
        caption:"hey there",
        imgURL:"https://images5.alphacoders.com/130/1306265.jpg",
        username:"mando"
    },
    {
        caption:"hello ",
        imgURL:"https://images5.alphacoders.com/130/1302520.jpg",
        username:"ashish"
    },
    {
        caption:"this is the way",
        imgURL:"https://images.alphacoders.com/105/1050036.jpg",
        username:"mandalorian"
    },
    {
        caption:"hi everyone",
        imgURL:"https://images8.alphacoders.com/130/1303971.png",
        username:"kunal"
    },
    {
        caption:"this is the way",
        imgURL:"https://images.alphacoders.com/105/1050036.jpg",
        username:"mandalorian"
    },
    {
        caption:"lots off love",
        imgURL:"https://images7.alphacoders.com/130/1305785.jpg",
        username:"naturelove"
    },
    {
        caption:"super bros",
        imgURL:"https://mfiles.alphacoders.com/991/991269.jpg",
        username:"mario"
    }
     ]);

    const navigate= useNavigate();

    // useEffect(()=>{

    //     const callRef= collection(db,'posts');

    //    getDocs(callRef).then((snapshot)=>{
    //     let temp=[];
    //     snapshot.docs.forEach((doc)=>{
    //         temp.push({
    //             id: doc.id,
    //             ...doc.data()
                
    //         })
    //     });
          
    //     setPosts(temp);
    //    });
    // },[]);

    return (
        <div className='homepage'>
            <div className='sidebar_container'>
                <div className='sidebar_top'>
                    <img className='sidebar_logo' src={logo} alt='logo' onClick={()=>navigate('/dashboard')} />
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
