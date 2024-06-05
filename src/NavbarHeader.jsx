import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
function NavbarHeader() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', }}>
            <div className='NavbarHeader_Main_div'>
                <p>WhatsApp</p>
                <div>
                    <SearchIcon />
                   <NavLink style={{color:'#25D366'}} className="NavBar_Main_div_NavLink" to='/UserId'><PersonPinIcon className="NavbarHeader_Main_div_icon" /></NavLink>
                </div>
            </div>
            
        </div>
    )
}

export default NavbarHeader
