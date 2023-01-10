import React, { useState } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import img1 from ".././images/image.jpg"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Post = ({username,caption,imgURL}) => {
    

    const [commentInput, setCommentInput] = useState("");
    return (
        <div className='post'>

            <div className='post_header'>

                <Avatar alt={username} src="" />
                <p style={{ fontWeight: "bold" }}>{username}</p>
            </div>

            <div className='img_div'>
                <img src={imgURL} alt="" />
            </div>

            <div className='icon_div'>
                <FavoriteIcon className='icons after' />
                <ModeCommentIcon className='icons' />
                <SendIcon className='icons flip' />
                <TurnedInNotIcon className='icons' />

            </div>

            <p className='para1'><span>1,111</span> Likes</p>
            <h4 className='h4_1'><span>{username}</span> {caption}</h4>

            <div className='comment_div'>
                <SentimentSatisfiedAltIcon className='icons' />
                <input type='text' placeholder='Add a comment...' value={commentInput} onChange={(e) => setCommentInput(e.target.value)} />
                <button disabled={commentInput?false:true}>Post</button>
            </div>
        </div>
    )
}

export default Post
