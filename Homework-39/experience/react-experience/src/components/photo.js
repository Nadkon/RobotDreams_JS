import React from "react";

function Photo(props) {
  return (
    <div className="img">
      <h1>Nadiia Kononykhina</h1>
      <img src={props.src} className="photo" alt="photo" />
    </div>
  );
}

export default Photo
