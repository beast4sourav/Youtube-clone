import React from 'react'
import "./Topic.css"

function Topic(props) {
  return (
    <div className="topic">
        {props.text}
    </div>
  )
}

export default Topic