import React, {useState} from 'react';
import useAuth from '../../hooks/useAuth';
import './CommentForm.css'

const CreateComment = (props) => {
    const [text, setText] = useState('')
    const [user, token] = useAuth();

    function handleSubmit(submissionForm){
        submissionForm.preventDefault();
        let newEntry = {
            user_id: user,
            video_id: props.video,
            text: text,
            likes: 0,
            dislikes: 0,
        };
        console.log(newEntry)
        props.createComment(newEntry)
    }

    return (
        <div>
            <form className='newComment' onSubmit={handleSubmit}>
                <label>Comment</label>
                <input type='Comment' value ={text} onChange={(e) => setText(e.target.value)}/>
            </form>
        </div>
    )
}

export default CreateComment