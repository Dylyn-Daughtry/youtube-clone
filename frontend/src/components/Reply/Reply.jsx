import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Reply = (props) => {
    const [text, setText] = useState('')
    const [user, token] = useAuth();

    async function handleSubmit(replyForm){
        replyForm.preventDefault();
        let newEntry = {
            user_id: user,
            comment_id: props.comment,
            text: text,
        };
        console.log(newEntry)
        await axios.post('http://127.0.0.1:8000/', newEntry, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    }

return (
    <div>
        <form className='newreply' onSubmit={handleSubmit}>
            <label>Reply</label>
            <input type='Reply' value ={text} onChange={(e) => setText(e.target.value)}/>
        </form>
    </div>
)
}
export default Reply;