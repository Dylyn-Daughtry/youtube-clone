import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comment.css'
import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton';
import Reply from '../Reply/Reply';

const Comment = (props) => {

    
    const [comment, setComment] = useState([])

    async function returnComment(){
        try{
        let retrieveComment = await axios.get(`http://127.0.0.1:8000/api/comments/video_id?${props.videoId}`)
        setComment(retrieveComment.data.filter((each)=>{if(each.video_id === props.videoId) return each}))
        console.log(retrieveComment.data)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        returnComment()
    },[])

    
    return ( 
        <div className='commenttable'>
            <h2>Comments</h2>
            <table className='table'>
                <tbody className='commentBody'>
                    {comment && comment.map((comment)=>
                    (
                        <React.Fragment key = {comment.id}>
                    <tr>
                        <td>{comment.user.username}</td>
                        <td>{comment.text}</td>
                        <td>{comment.likes}</td> 
                        <LikeButton/>
                        <td>{comment.dislikes}</td>   
                        <DislikeButton/>
                    </tr>
                    <tr className='reply'>
                        <Reply/>
                    </tr>
                    </React.Fragment>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Comment;
