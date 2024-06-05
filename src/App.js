import React from 'react'
import LogIn from './LogIn'
import NavbarHeader from './NavbarHeader'
import StartupPage from './StartupPage'
import { Switch, Route, NavLink,Redirect } from 'react-router-dom';
import Chats from './Chats';
import Status from './Status';
import Calls from './Calls';
import NavBar from './NavBar';
import UserId from './UserId';
import Cameras from './Cameras';
import AbdulQadir from './PeoplesChats/AbdulQadir';
import LatifChat from './PeoplesChats/LatifChat';
import AsimChat from './PeoplesChats/AsimChat';
import JawadChat from './PeoplesChats/JawadChat';
import Messi from './PeoplesChats/Messi';
import MubashirChat from './PeoplesChats/MubashirChat';
import PMASChat from './PeoplesChats/PMASChat';
import QasimChat from './PeoplesChats/QasimChat';
import TanzeelChat from './PeoplesChats/TanzeelChat';
import Video from './Video';
import LogInCamere from './LogInCamere';

function App() {
  return (
    
      <div className='App_Main_container'>
      <Switch>
        <Route exact path="/"> <StartupPage /></Route>
        <Route exact path='/Chats'><div style={{ display: 'flex', flexDirection: 'column' }}> <Chats /> </div></Route>
        <Route exact path='/Status'><div style={{ display: 'flex', flexDirection: 'column' }}> <Status /></div></Route>
        <Route exact path='/Calls'><div style={{ display: 'flex', flexDirection: 'column' }}><Calls /></div></Route>
        <Route exact path="/Login"><LogIn/></Route>
        <Route exact path="/UserId"><UserId/></Route>
        <Route exact path="/Cameras"><Cameras/></Route>
        <Route exact path="/LogInCamere"><LogInCamere/></Route>
        <Route exact path="/Video"><Video/></Route>
        <Route exact path="/AbdulQadir"><AbdulQadir/></Route>
        <Route exact path="/AsimChat"><AsimChat/></Route>
        <Route exact path="/JawadChat"><JawadChat/></Route>
        <Route exact path="/LatifChat"><LatifChat/></Route>
        <Route exact path="/Messi"><Messi/></Route>
        <Route exact path="/MubashirChat"><MubashirChat/></Route>
        <Route exact path="/QasimChat"><QasimChat/></Route>
        <Route exact path="/TanzeelChat"><TanzeelChat/></Route>
        <Route exact path="/PMASChat"><PMASChat/></Route>
        <Redirect exact to='/'/>
</Switch>
      </div>
  )
}

export default App
