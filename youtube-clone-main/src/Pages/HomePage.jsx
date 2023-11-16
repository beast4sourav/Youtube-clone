import React from "react";
import "./HomePage.css";
import VideoCard from "../components/VideoCard";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Topic from "../components/Topic";
import { useState } from "react";

function HomePage() {
  const [activeSidebar, setActiveSidebar] = useState("Home");

  const handleSidebarClick = (text) => {
    setActiveSidebar(text);
  };

  return (<>
  <NavBar/>
    <div className="main-flex-container">
      <div className="page">
        <div className="sidebar">
            <SideBar text="Home" isActive={activeSidebar === "Home"} onClick={() => handleSidebarClick("Home")} />
            <SideBar text="Shorts" isActive={activeSidebar === "Shorts"} onClick={() => handleSidebarClick("Shorts")} />
            <SideBar text="Subscriptions" isActive={activeSidebar === "Subscriptions"} onClick={() => handleSidebarClick("Subscriptions")} />
            <hr />
            <SideBar text="Library" isActive={activeSidebar === "Library"} onClick={() => handleSidebarClick("Library")} />
            <SideBar text="History" isActive={activeSidebar === "History"} onClick={() => handleSidebarClick("History")} />
            <SideBar text="Your Videos" isActive={activeSidebar === "Your Videos"} onClick={() => handleSidebarClick("Your Videos")} />
            <SideBar text="Watch Later" isActive={activeSidebar === "Watch Later"} onClick={() => handleSidebarClick("Watch Later")} />
            <hr />
            <SideBar text="Settings" isActive={activeSidebar === "Settings"} onClick={() => handleSidebarClick("Settings")} />
            <SideBar text="Report History" isActive={activeSidebar === "Report History"} onClick={() => handleSidebarClick("Report History")} />
            <SideBar text="Help" isActive={activeSidebar === "Help"} onClick={() => handleSidebarClick("Help")} />
            <SideBar text="Send Feedback" isActive={activeSidebar === "Send Feedback"} onClick={() => handleSidebarClick("Send Feedback")} />
          </div>
        <div className="main-container">
          <div className="topics">

          <Topic text="Jujutsu kaisen"/>
          <Topic text=" kaisen"/>
          <Topic text="Jujutsu kaisen"/>
          <Topic text="Jujutsu kaisen"/>
          <Topic text="Jujutsu kaisen"/>
          <Topic text="Jujutsu kaisen"/>
          <Topic text="Jujutsu kaisen"/>
          </div>

        <div className="main">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default HomePage;
