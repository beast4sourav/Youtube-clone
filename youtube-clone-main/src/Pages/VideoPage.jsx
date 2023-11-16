import React from "react";
import "./VideoPage.css";
import SuggCard from "../components/SuggCard";
import NavBar from "../components/NavBar";
import Discription from "../components/Discription";
function VideoPage() {
  return (
    <>
      <NavBar />
      <div className="videopage">
        <div className="videoItem">
          <iframe
            src="https://www.youtube.com/embed/7NtDL5Lttt4"
            width="90%"
            height="80%"
            allowFullScreen
            allow="autoplay"
          ></iframe>
          <Discription/>
        </div>
        <div className="sideBar">
          <SuggCard />
          <SuggCard />
          <SuggCard />
          <SuggCard />
        </div>
      </div>
    </>
  );
}

export default VideoPage;
