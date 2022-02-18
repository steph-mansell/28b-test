import React from "react";
import "./Welcome.css";

function Welcome(props) {
  return (
    <div className="welcome">
      <p className="welcome-text">Welcome,</p>
      <p>{props.name}</p>
    </div>
  );
}

export default Welcome;
