import React, { useState } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MoodIcon from '@material-ui/icons/Mood';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {generateName} from './features/counter/counterSlice';
function LogIn() {
    const [name, upName]=useState();
    const dispatch = useDispatch();
    const thisVal=(obj)=>{
        upName(obj.target.value);
    }
    const sendVal=()=>{
        dispatch(generateName({
            actualName:name,
        }))
    }
     
    return (
        <div className="LogIn_MainDiv">
          <h6>Profile info</h6>
          <p>Please Provide your name and an optional profile photo</p>
          <NavLink style={{color:'#075E54'}} to="/LogInCamere"><div onClick={()=>alert('Still in development Process 👨‍💻')} className="AddAPhotoIcon_outer_div"><AddAPhotoIcon className="AddAPhotoIcon" /></div></NavLink>
          <div className='LogIn_Input_maindiv'>
              <input onChange={thisVal} autoComplete='none' placeholder='Type your name here' type="text"/>
              <MoodIcon/>
          </div>
          <NavLink  className="NavBar_Main_div_NavLink" to='/Chats' ><Button onClick={sendVal}  disabled={!name} className= {!name?"LogIn_MainDiv_Button_disabled" :"LogIn_MainDiv_Button"}>Next</Button></NavLink> 
        </div>
    )
}

export default LogIn
