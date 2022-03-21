import React, { useState } from 'react';
import axios from 'axios';

const Comment = (props) => {

    const [comment, SetComment] = useState([])

    return ( 
        <div>
            <h2>Username</h2>
            <span>Comment</span>
        </div>
     );
}
 
export default Comment;