import React, {useState} from "react";
import axios from "axios";

const Reply = (props) => {

    const [reply, setReply] = useState([])

    async function returnReplies(){
        try{
        let retrieveReply = await axios.get('http://127.0.0.1:8000/')
        setReply(retrieveReply.data.filter)
        }
    }


}