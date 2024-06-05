import React from 'react'
import CallIcon from '@material-ui/icons/Call';
function CallsDetail({callicon, img, Heading,time}) {
    return (
        <div className='ChatsDetail_main_div'>
        <div style={{ display: 'flex', flex: '0.1' }}>
            <img className='ChatsDetail_img ' src={img} alt="{img} " />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '0.9' }}>
            <div className='Chatdetail_main_div_inner_div'>
                <p style={{ fontWeight: 'bolder' }}>{Heading}</p>
                 <p style={{color:'#075E54'}}><CallIcon/></p> 
            </div>
            <div className="Chatdetail_main_div_inner_div_sms">
                <p>{callicon} {time}</p>
            </div>
            <div className="ChatsDetail_hr_line"> <hr /></div>
        </div>
    </div>
    )
}

export default CallsDetail
