import React from "react";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";

function VideoCard() {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate("/videos")
  }


  return (
    <>
      <div className="video-container" onClick={handleClick}>
        <img src="https://i.ytimg.com/vi/Pm-wNmS9RGI/hq720.jpg" alt="" srcset="" />
        <div className="text-container">
          <div className="icon">
            <img src="https://robohash.org/777" alt="" srcset="" />
          </div>
          <div className="text-content">
            <div className="title">This is the title of the video</div>
            <div className="channel-name">Channel Name</div>
            <div className="channel-name">200k  2 month ago</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
