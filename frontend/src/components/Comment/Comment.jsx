import React, { useState } from 'react';
import axios from 'axios';

const Comment = (props) => {

    
    const [comment, setComment] = useState([])

    async function returnComment(){
        let retrieveComment = await axios.get(`http://127.0.0.1:8000/api/comments/video_id?jNQXAC9IVRw`)
        setComment(retrieveComment)
    }

    return ( 
        <div>
            {returnComment()}
            <h2>Comments</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>{comment.user_id.username}</th>
                    </tr>
                </thead>
                <tbody>
                {comment.map(comment => {
                    return (
                        <tr key = {comment.id}>
                            <td>{comment.text}</td>
                            <td>{comment.likes}</td>
                            <td>{comment.dislikes}</td>                          
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
     );
}
 
export default Comment;
