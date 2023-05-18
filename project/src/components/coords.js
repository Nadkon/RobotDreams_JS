
import { useState, useEffect } from "react";

const [lat, getLat] = useState([]);
const [long, getLong] = useState([]);

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function (position) {
    getLat(position.coords.latitude);
    getLong(position.coords.longitude);
  });
  console.log("Lat is ", lat);
  console.log("Long is ", long);
}, [lat, long]);