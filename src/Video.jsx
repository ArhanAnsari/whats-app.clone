import React, { useEffect, useRef, useState } from 'react'
import Mmessage from './Images/Message.webp'
// import {NavLink} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WifiIcon from '@material-ui/icons/Wifi';
import Vid from './Images/1_way.mp4'
import { NavLink } from 'react-router-dom';
function Video() {
    const [playing, upPlaing] = useState(true);
    const thisVid = useRef(null);
    const play_pauseThis = () => {
        if (playing) {
            thisVid.current.play();
            upPlaing(false)
        } else {
            thisVid.current.pause();
            upPlaing(true)
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>

<div style={{ position: 'fixed', top: '0px', width: '100vw', background: 'transparent',zIndex:'500' }} className="Message_header">
                <div style={{ flex: '0.2' }}>
                <NavLink style={{ zIndex: '500' }} to="/Status"> <ArrowBackIcon style={{ color: 'white', cursor: 'pointer' }} /></NavLink>
                    <img className='Message_Header_img ' src={Mmessage} alt="{img} " />
                </div>
                <div style={{ flex: '0.5', display: 'flex', flexDirection: 'column', }}>
                    <p style={{ fontWeight: 'bolder', color: 'white', paddingTop: '15px' }}>Status</p>
                    <p style={{ color: 'white', marginLeft: '-10px' }} className="Chatdetail_main_div_inner_div_sms">Today, 7:17 PM</p>
                </div>
                <div style={{ flex: '0.3', display: 'flex', justifyContent: 'space-between' }}>
                    {/* <VideocamIcon style={{ color: 'white' }} />
                            <CallIcon style={{ color: 'white' }} /> */}
                    <MoreVertIcon style={{ color: 'white', position: 'fixed', right: '3px', top: '10px' }} />
                </div>
            </div>

            <video  ref={thisVid} onClick={play_pauseThis} style={{ width: '100vw', height: '100vh',position: 'fixed', top: '0px', width: '100vw' }} src={Vid} autoplay="true" />
            <div style={{ position: "fixed", bottom: '20px', color: 'white', display: 'flex', justifyContent: 'center', placeItem: 'center', width: '100vw', flexDirection: 'column', textAlign: 'center' }}><p><WifiIcon fontSize='large' /></p><p style={{ marginTop: '-19px' }}>50</p></div>
        </div>
    )
}

export default Video
