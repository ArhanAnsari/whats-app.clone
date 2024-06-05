import React from 'react'
import NavBar from './NavBar'
import NavbarHeader from './NavbarHeader'
import StatusDetail from './StatusDetail'
import {NavLink} from 'react-router-dom';
import Dp from './Images/dp.jpg'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Asim from './Images/Asim.jpg'
import Qasim from './Images/Qasim.jpg'
import jawad from './Images/jawad.jpg'
import Latif from './Images/Latif.jpg'
import messi from './Images/messi.jpg'
import Mubashir from './Images/Mubashir.jpg'
import qaid from './Images/qaid.jpg'
import Tanzil from './Images/Tanzil.jpg'

function Status() {
    return (
        <div ><NavbarHeader/>
       <div className='navbar_fixed'>
       <NavBar   />
       </div>


       <NavLink style={{textDecoration:'none', color:'black'}} to='/Cameras'><div className='ChatsDetail_main_div'>
            <div style={{ display: 'flex', flex: '0.1' }}>
                <img className='ChatsDetail_img' src={jawad} alt="{img} " />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '0.9' }}>
                <div className='Chatdetail_main_div_inner_div'>
                    <p style={{ fontWeight: 'bolder' }}>My Staus</p>

                </div>
                <div className="Chatdetail_main_div_inner_div_sms">
                    <p>Tap to add status update</p>
                </div>
                <div style={{visibility:'hidden'}} className="ChatsDetail_hr_line"> <hr /></div>
            </div>
        </div></NavLink>

           <div className="Recent_updates">
               Recent updates
           </div>
        
        <div className="Chats_Main_Div">
            
            
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Qasim} Heading='Qasim Sumroo'  time="Today,10:21 AM" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Dp} Heading='Abdul Qadir'  time="Yesterday,3:09 PM" /></NavLink>
            {/* <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Dp} Heading='PMAS BS CS -6B' Sms="Cr: I informed you all that don't desturb Sir Shakeel ..." time="Yesterday" /></NavLink> */}
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Mubashir} Heading='Mubashir Hanif'  time="Today, 12:36 Am" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Tanzil} Heading='Tanzeel Bajwa'  time="Now" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Asim} Heading='Muhammad Asim'  time="Yesterday,3:09 Pm" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={jawad} Heading='Muhammad Jawad'  time="Today, 12:56 AM" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={messi} Heading='Messi '  time="3:24 Am" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={qaid} Heading='PMAS BS CS -6B'  time="Yesterday" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Mubashir} Heading='Mubashir Hanif'  time="12:36 Am" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Qasim} Heading='Qasim Sumroo'  time="3/28/21" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Dp} Heading='Abdul Qadir'  time="Today, 1:46 PM" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Tanzil} Heading='Tanzeel Bajwa'  time="Now" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={Asim} Heading='Muhammad Asim'  time="Yesterday, 3:00Am" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={jawad} Heading='Muhammad Jawad'  time="Yesterday,3:09 Pm" /></NavLink>
            <NavLink style={{textDecoration:'none', color:'black'}} to="/Video"><StatusDetail img={messi} Heading='Messi '  time="Today,10:21 AM" /></NavLink>
            {/* img={} Heading='' Sms="" time=""  */}
           
           <NavLink to="/Cameras"><div className='chat_icon'>
            <CameraAltIcon style={{color:'white'}}/>
        </div></NavLink> 
        </div>
        </div>
    )
}

export default Status
