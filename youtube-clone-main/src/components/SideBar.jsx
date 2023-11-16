import React from 'react';
import "./SideBar.css";

function SideBar(props) {
  const isActive = props.isActive;

  return (
    <div className={`sidebar-cont ${isActive ? 'active' : ''}`}>
      {props.text}
    </div>
  );
}

export default SideBar;
