import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from 'react-router-dom';
function LogInCamere(props) {
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (<>
    <div className="Camera_main">
      <NavLink to='/Login'>
      <div className="Camera_inner_div">
        <ArrowBackIcon fontSize='large' style={{ color: '#fff'}} />
      </div>
      </NavLink>
      <div>
    <Camera isFullscreen="true" isMaxResolution="true" className="Camedra"
      onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
    />
    </div>
    <div className="Cam_div">
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </div>
    </div>
    </>
  );
}

export default LogInCamere;