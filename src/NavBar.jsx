import React from 'react'
import Button from '@material-ui/core/Button';
import {Switch, Route, NavLink} from 'react-router-dom';
function NavBar() {
    return (
        <div style={{position:'sticky',top:'0px', position:'-webkit-sticky'}} className="NavBar_Main_div">
           <NavLink className='NavBar_Main_div_NavLink' activeClassName="NavBar_Main_div_NavLink_btn" to='/Chats'>
           <Button className='NavBar_Main_div_Button'>Chats</Button>
           </NavLink> 
           <NavLink className='NavBar_Main_div_NavLink' activeClassName="NavBar_Main_div_NavLink_btn" to='/Status'>
           <Button className='NavBar_Main_div_Button'>Status</Button>
           </NavLink> 
           <NavLink className='NavBar_Main_div_NavLink' activeClassName="NavBar_Main_div_NavLink_btn" to='/Calls'> 
           <Button className='NavBar_Main_div_Button'>Calls</Button>
           </NavLink> 
        </div>
    )
}

export default NavBar
