import React, { useState } from 'react';
import axios from 'axios';

const Comment = (props) => {

    
    const [comment, SetComment] = useState([])
    
    let defaultComment = {
        user: '',
        text: '',
        likes: '',
        dislikes: ''
    }
    async function returnComment(){
        retrieveComment = await axios.get(`http://127.0.0.1:8000/api/comments/video_id?${props.videoId}`)

    }
    return ( 
        <div>
            <h2>Comments</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                {retrieveComment.map(comment => {
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