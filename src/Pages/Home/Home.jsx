import React from "react";
import Button from '@mui/material/Button';
import alertify from 'alertifyjs' // https://alertifyjs.com/
import axios from 'axios' //https://www.npmjs.com/package/axios

import './home.css'

const  Home = () => {

  const iKnowYou = async () => {
    let ipResponse = await axios.get('https://api.ipify.org?format=json')   // Example request to an api (like an internal one run on the pi, or another pi run on the same network)

    if(ipResponse.data.ip){
      alertify.success(`Yeah I know you... ${ipResponse.data.ip}`)    // Gives you immediate confirmation that the opertaion/request was successful.
    }
    else{
      alertify.error("WHY CAN'T I FIND YOU????")  // Can try to capture error data in response and show/log that instead
    }
  }

  const meWasClicked = () => {
    alertify.error("Why would you do that...")
  }

  // iframe tag is here if you want to drop your url in.
  return (
    <div className="home">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
      <div>
        <Button variant="contained" onClick={iKnowYou}>Do I know you?</Button>
        <Button variant="outlined" onClick={meWasClicked}>Click Me!</Button>      
      </div>
    </div>
  );
}

export default Home;
