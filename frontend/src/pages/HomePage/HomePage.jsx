import React from "react";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPage from "../VideoPage/VideoPage";
import './HomePage.css'

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  return (
    <div className="wrapper">
      <h1>Welcome Home {user.username}!</h1>
      <div className="container">
        <Comment/>
        <div className="videoplayer">
          <VideoPlayer/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
