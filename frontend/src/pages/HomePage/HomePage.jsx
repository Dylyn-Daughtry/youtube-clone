import React from "react";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPage from "../VideoPage/VideoPage";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <VideoPlayer/>
      <Comment/>
    </div>
  );
};

export default HomePage;
