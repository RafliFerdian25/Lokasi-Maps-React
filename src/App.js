// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

function App() {
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");

  React.useEffect(() => {
    const showPosition = (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      // setLat(-6.917593)
      // setLong(110.050856)
    }

    const showError = (error) => {
      console.log(error.code);
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
      }
    }
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    // console.log(error.code);
    // switch (error) {
    //   case error.PERMISSION_DENIED:
    //     alert("User denied the request for Geolocation.");
    //     // location.reload();
    //     break;
    //   }
    // })
    
  }, []);

  React.useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    iframeData.src = `https://www.google.com/maps?q=${lat},${long}&z=15&output=embed`;
  });

  return (
    <>
      <div>Map</div>
      <iframe id="iframeId" width="600" height="450"></iframe>
      <a
        href={`https://www.google.com/maps/dir/${lat},${long}/${lat+1},${long+1}/@${lat+1},${long+1}`}
      >
        Link
      </a>
    </>
  );
}

export default App;
