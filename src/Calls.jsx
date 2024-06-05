import React from 'react'
import NavBar from './NavBar'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import NavbarHeader from './NavbarHeader'
import Dp from './Images/dp.jpg'
import CallsDetail from './CallsDetail'
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Asim from './Images/Asim.jpg'
import Qasim from './Images/Qasim.jpg'
import jawad from './Images/jawad.jpg'
import Latif from './Images/Latif.jpg'
import messi from './Images/messi.jpg'
import Mubashir from './Images/Mubashir.jpg'
import qaid from './Images/qaid.jpg'
import Tanzil from './Images/Tanzil.jpg'
function Calls() {
    return (
        <div ><NavbarHeader/>
       <div className='navbar_fixed'>
       <NavBar   />
       </div>


       

          
        
        <div className="Chats_Main_Div">
            
            
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: '#25D366' }}/>} img={Qasim} Heading='Qasim Sumroo'  time="Today,10:21 AM" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: 'red' }}/>} img={Dp} Heading='Abdul Qadir'  time="Yesterday,3:09 PM" />
            {/* <CallsDetail callicon={<CallMadeIcon/>} img={Dp} Heading='PMAS BS CS -6B' Sms="Cr: I informed you all that don't desturb Sir Shakeel ..." time="Yesterday" /> */}
            <CallsDetail callicon={<CallReceivedIcon fontSize="small" style={{ color: 'red' }}/>} img={Mubashir} Heading='Mubashir Hanif'  time="Today, 12:36 Am" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: '#25D366' }}/>} img={Tanzil} Heading='Tanzeel Bajwa'  time="Now" />
            <CallsDetail callicon={<CallReceivedIcon fontSize="small" style={{ color: 'red' }}/>} img={Asim} Heading='Muhammad Asim'  time="Yesterday,3:09 Pm" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: '#25D366' }}/>} img={jawad} Heading='Muhammad Jawad'  time="Today, 12:56 AM" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: 'red' }}/>} img={messi} Heading='Clever Programmer '  time="3:24 Am" />
            <CallsDetail callicon={<CallReceivedIcon fontSize="small" style={{ color: '#25D366' }}/>} img={qaid} Heading='PMAS BS CS -6B'  time="Yesterday" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: '#25D366' }}/>} img={Mubashir} Heading='Mubashir Hanif'  time="12:36 Am" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: 'red' }}/>} img={Qasim} Heading='Qasim Sumroo'  time="3/28/21" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: 'red' }}/>} img={Dp} Heading='Abdul Qadir'  time="Today, 1:46 PM" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: 'red' }}/>} img={Tanzil} Heading='Tanzeel Bajwa'  time="Now" />
            <CallsDetail callicon={<CallReceivedIcon fontSize="small" style={{ color: '#25D366' }}/>} img={Asim} Heading='Muhammad Asim'  time="Yesterday, 3:00Am" />
            <CallsDetail callicon={<CallMadeIcon fontSize="small" style={{ color: 'red' }}/>} img={jawad} Heading='Muhammad Jawad'  time="Yesterday,3:09 Pm" />
            <CallsDetail callicon={<CallReceivedIcon fontSize="small" style={{ color: '#25D366' }}/>} img={messi} Heading='Messi '  time="Today,10:21 AM" />
            {/* img={} Heading='' Sms="" time=""  */}
           
            <div className='chat_icon'>
            <AddIcCallIcon style={{color:'white'}}/> 
        </div>
        </div>
        </div>
    )
}

export default Calls
