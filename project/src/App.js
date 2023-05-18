import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [lat, getLat] = useState([]);
  const [long, getLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getLat(position.coords.latitude);
      getLong(position.coords.longitude);
    });

  }, [lat, long]);

  return <div className="App">{lat} and { long}</div>;
}
export default App;
