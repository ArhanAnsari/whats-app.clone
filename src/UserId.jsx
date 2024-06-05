import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonIcon from '@material-ui/icons/Person';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CreateIcon from '@material-ui/icons/Create';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {NavLink} from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import {useSelector} from 'react-redux';
import {generatedName} from './features/counter/counterSlice';
function UserId() {
    const Name=useSelector(generatedName);
    return (
        <div className="UserId_Mian_div">

            <p>
                <NavLink to="/Chats"><ArrowBackIcon className='UserId_Mian_div_p_ArrowBackIcon' /></NavLink>
               Profile
           </p>
            <div onClick={() => alert('This Feature Is not Available Yet 👨‍💻')} className="UserId_Mian_div_logo_div"><PersonPinIcon className="UserId_AddAPhotoIcon" /></div>
            <div className='UserId_Lowerdiv'>
                <div className="PersonIcon"><PersonIcon className="UserId_icon_color" /></div>
                <div>
                    <div className="Userid_name">
                        <div className="Userid_name_p">
                            <div style={{ color: 'rgb(128, 125, 125)' }}>Name</div>
                            <div style={{ fontSize: '0.9rem',fontWeight:'bold' }}>{Name}</div>
                        </div>
                        <div>
                            <NavLink to="/Login"><CreateIcon className="CreateIcon_hover" /></NavLink>
                        </div>
                    </div>
                    <div className='UserId_name_detail'>
                    This is not your username or pin.This name
                    will be visible to your WhatsApp contacts.
                    </div>
                    <div>
                        <hr className='UserId_icon_color'/>
                    </div>
                </div>
            </div>
            <div className='UserId_Lowerdiv'>
                <div className="PersonIcon"><InfoOutlinedIcon className="UserId_icon_color" /></div>
                <div>
                    <div className="Userid_name">
                        <div className="Userid_name_p">
                            <div style={{ color: 'rgb(128, 125, 125)' }}>About</div>
                             </div>
                        <div>
                       <CreateIcon className="CreateIcon" />
                        </div>
                    </div>
                    <div contentEditable className='UserId_name_detail_p'>
                   Try ,try and try until you succeed. Good Luck for future.
                    </div>
                    <div>
                    <hr className='UserId_icon_color'/>
                    </div>
                </div>
                
            </div>
            <div className='UserId_Lowerdiv'>
                <div className="PersonIcon"><CallIcon className="UserId_icon_color" /></div>
                <div>
                    <div className="Userid_name">
                        <div className="Userid_name_p">
                            <div style={{ color: 'rgb(128, 125, 125)' }}>About</div>
                             </div>
                       
                    </div>
                    <div contentEditable className='UserId_name_detail_p'>
                  +92 307********
                    </div>
                    <div>
                    <hr style={{flex:'1'}} style={{color:'white'}}/>
                    </div>
                </div>
                
            </div>
           
            <div className="Created_by">
                <p>Created by Muhammad Jawad  || All Right Reserverd ©️ 2022</p>
            </div>

        </div>
    )
}

export default UserId
