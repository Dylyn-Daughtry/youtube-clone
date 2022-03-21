import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comment.css'


const Comment = (props) => {

    
    const [comment, setComment] = useState([])

    async function returnComment(){
        try{
        let retrieveComment = await axios.get(`http://127.0.0.1:8000/api/comments/video_id?jNQXAC9IVRw`)
        setComment(retrieveComment.data)
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
                <thead>
                    <tr>
                        <th>{comment.user_id}</th>
                    </tr>
                </thead>
                <tbody>
                    {comment && comment.map((comment)=>
                    (
                    <tr key = {comment.id}>
                        <td>{comment.text}</td>
                        <td>{comment.likes}</td>
                        <td>{comment.dislikes}</td>                          
                    </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}
 
export default Comment;
