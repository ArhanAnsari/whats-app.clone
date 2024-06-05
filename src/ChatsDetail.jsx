import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';
import { NavLink } from 'react-router-dom';
function ChatsDetail({ img,Heading, Sms, time  }) {
    return (
        <div className='ChatsDetail_main_div'>
            <div style={{ display: 'flex', flex: '0.1' }}>
                <img className='ChatsDetail_img ' src={img} alt="{img} " />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '0.9' }}>
                <div className='Chatdetail_main_div_inner_div'>
                    <p style={{fontWeight:'bolder'}}>{Heading}</p>
                    <p style={{color:'grey', fontSize:'smaller'}}>{time}</p>
                </div>
                <div className="Chatdetail_main_div_inner_div_sms">
                    <p>{Sms}</p>
                </div>
                <div className="ChatsDetail_hr_line"> <hr/></div>
            </div>
        </div>
    )
}

export default ChatsDetail
