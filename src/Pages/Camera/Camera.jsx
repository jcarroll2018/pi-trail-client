import React, { useState } from "react";
import { useOnMount } from '../../Hooks'
import WSAvcPlayer from 'ws-avc-player'

import './camera.css'

const  Camera = () => {
  const [player, setPlayer] = useState(null)
  
  useOnMount(() => {
    console.log('Mounted!');

    let wsavcPlayer = new WSAvcPlayer({useWorker: true});
    document.getElementById('camera-viewBox').appendChild(wsavcPlayer.AvcPlayer.canvas);
    wsavcPlayer.connect('ws://piCam:8000');
    
    setPlayer(wsavcPlayer);
  })

  return (
    <div className="camera">
      Camera Page

      <div id='camera-viewBox' />
    </div>
  );
}

export default Camera;
