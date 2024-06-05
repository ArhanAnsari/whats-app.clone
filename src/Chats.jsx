import React, { useEffect, useState } from 'react'
import ChatsDetail from './ChatsDetail'
import Dp from './Images/dp.jpg'
import NavbarHeader from './NavbarHeader';
import NavBar from './NavBar';
import MessageIcon from '@material-ui/icons/Message';
import Asim from './Images/Asim.jpg'
import Qasim from './Images/Qasim.jpg'
import jawad from './Images/jawad.jpg'
import Latif from './Images/Latif.jpg'
import messi from './Images/messi.jpg'
import Mubashir from './Images/Mubashir.jpg'
import qaid from './Images/qaid.jpg'
import Tanzil from './Images/Tanzil.jpg'
import { NavLink } from 'react-router-dom';
// import Asim from './Images/Asim.jpg'

function Chats() {

    return (
        <div className="Chats_Main_Div_width"><NavbarHeader />
            <div className='navbar_fixed'>
                <NavBar />
            </div>


            <div className="Chats_Main_Div">

                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/PMASChat"> <ChatsDetail img={qaid} Heading='PMAS BS CS -6B' Sms="Cr: I informed you all that don't desturb Sir Shakeel ..." time="Yesterday" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MubashirChat"> <ChatsDetail img={Mubashir} Heading='Mubashir Hanif' Sms="Hal jado Commercial da chkar la aya aa..." time="12:36 Am" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/QasimChat"> <ChatsDetail img={Qasim} Heading='Qasim Sumroo' Sms="Bas ab life ma kuch karna han to dakh lana.." time="3/28/21" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/AbdulQadir"> <ChatsDetail img={Dp} Heading='Abdul Qadir' Sms="Hal Jawad Assignment bnai ha k nhi...?" time="Today" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/TanzeelChat"> <ChatsDetail img={Tanzil} Heading='Tanzeel Bajwa' Sms="Aja Game cha ❤,Aj conqurer karna aa... 😄" time="Now" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/AsimChat"> <ChatsDetail img={Asim} Heading='Muhammad Asim' Sms="Chor class ma kya rakha ha 😄😄😄😄..." time="Yesterday" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/JawadChat"> <ChatsDetail img={jawad} Heading='Muhammad Jawad' Sms="Tu rahna da kuch na likh apna bara ma 🤞, Ok Boss 🛩️" time="Searching" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Messi"> <ChatsDetail img={messi} Heading='Messi ' Sms="messi tera janisar Beshumar Beshumar..." time="3:24 Am" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/LatifChat"> <ChatsDetail img={Latif} Heading='Latif Baloch' Sms="Jani bas mil rha hae sham ko... 💯 ..." time="Yesterday" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MubashirChat"> <ChatsDetail img={Mubashir} Heading='Mubashir Hanif' Sms="Hal jado Commercial da chkar la aya aa..." time="12:36 Am" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/QasimChat"> <ChatsDetail img={Qasim} Heading='Qasim Sumroo' Sms="hahah,  .." time="3/28/21" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/AbdulQadir"> <ChatsDetail img={Dp} Heading='Abdul Qadir' Sms="Hal Jawad Assignment bnai ha k nhi...?" time="Today" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/TanzeelChat"> <ChatsDetail img={Tanzil} Heading='Tanzeel Bajwa' Sms="Aja Game cha ❤,Aj conqurer karna aa... 😄" time="Now" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/AsimChat"> <ChatsDetail img={Asim} Heading='Muhammad Asim' Sms="Chor class ma kya rakha ha 😄😄😄😄..." time="Yesterday" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/JawadChat"> <ChatsDetail img={jawad} Heading='Muhammad Jawad' Sms="Tu rahna da kuch na likh apna bara ma 🤞, Ok Boss 🛩️" time="" /> </NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Messi"> <ChatsDetail img={messi} Heading='Messi ' Sms="Hey dude whats'up... 😍" time="" /> </NavLink>

                <NavLink to="/JawadChat">
                <div className='chat_icon'>
                    <MessageIcon style={{ color: 'white' }} />
                </div>
                </NavLink>
        </div>
            </div>
    )
}

export default Chats
