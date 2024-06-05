import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Asim from '../Images/Asim.jpg'
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Asim from './Images/Asim.jpg'
import {NavLink} from 'react-router-dom';
import Mmessage from '../Images/Message.webp'
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const time = new Date().toLocaleTimeString();
// time..color='green'

function AsimChat() {
    const [sms, upMsg] = useState();
    const [sentsms, storedSms] = useState([])
    console.log(sms);
    const sendMsg = () => {
        storedSms((obj) => {
            return [
                ...obj, sms
            ]
        });upMsg('')
    }
    // console.log(time)
    return (
        <>
            <div style={{ width: '100vw', height: '100vh', }}>
                <div className="Message_Main_container">

                    <div className="Message_header">
                        <div style={{ flex: '0.2' }}>
                        <NavLink to='/Chats'><ArrowBackIcon style={{ color: 'white' }} /></NavLink>
                            <img className='Message_Header_img ' src={Asim} alt="{img} " />
                        </div>
                        <div style={{ flex: '0.5', display: 'flex', flexDirection: 'column', }}>
                            <p style={{ fontWeight: 'bolder', color: 'white', paddingTop: '15px' }}>Muhammad Asim</p>
                            <p className="Chatdetail_main_div_inner_div_sms">online</p>
                        </div>
                        <div style={{ flex: '0.3', display: 'flex', justifyContent: 'space-between' }}>
                            <VideocamIcon style={{ color: 'white' }} />
                            <CallIcon style={{ color: 'white' }} />
                            <MoreVertIcon style={{ color: 'white' }} />
                        </div>
                    </div>
                    <div className="scroll_msg">
                    <div className="sms_container_div_0">
                        <div ><TextareaAutosize contentEditable="false" className="sms_TextareaAutosize_0" value="Welcome To Jawad's WhatsApp" />
                        </div>
                    </div>
                    <div className="sms_container_div_0">
                        <div ><TextareaAutosize contentEditable="false" className="sms_TextareaAutosize_0" value="How are you😃. " />
                        </div>

                        {/* <span className="li_sms">{val}</span>) */}

                    </div>
                    
                        <div className="sms_container_div">
                            {sentsms.map((val) => {
                                return (<div  ><TextareaAutosize contentEditable="false" className="sms_TextareaAutosize" value={`${val}                                 ${time}`} /></div>)
                                {/* <span className="li_sms">{val}</span>) */ }
                            })}
                        </div>
                    </div>

                    <div className="Message_input_main">
                        <div className="Message_input"><InsertEmoticonOutlinedIcon fontSize='' />
                            <input value={sms} onChange={(obj) => { upMsg(obj.target.value) }} placeholder="Type a message" type="text" />
                            {!sms ? <AttachFileOutlinedIcon /> : null}<CameraAltIcon /></div>
                        <div className="Message_mike_main"><div className="Message_mike"><button className="buton">{!sms ? <MicIcon style={{ cursor: 'pointer' }} onClick={() => alert('Working on audio functionality,In development process... 😼')} /> : <SendIcon onClick={sendMsg} />}</button></div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsimChat
