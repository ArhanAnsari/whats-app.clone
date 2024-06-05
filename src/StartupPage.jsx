import React from 'react'
import Startup_logo from './Images/startup_logo.jpg';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
function StartupPage() {
    return (
        <div className='StartupPage_Main_div'>
           <h3 className=''>Welcome to WhatsApp</h3>
           <img src={Startup_logo} alt="Startup_logo"/>
           <p>Read our <a href="">Privacy Policy.</a> Tap "Agree and continue" to accept the <a href="">Terms of Service.</a></p>
          <NavLink className="NavBar_Main_div_NavLink" to='/LogIn' ><Button className="StartupPage_Main_div_Button">AGREE AND CONTINUE</Button></NavLink>
          <p  className='StartupPage_last_p'>from <p>FACEBOOK</p></p>
        </div>
    )
}

export default StartupPage
