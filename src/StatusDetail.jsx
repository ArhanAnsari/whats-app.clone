import React from 'react'

function StatusDetail({ img, Heading, Sms, time }) {
    return (
        <div className='ChatsDetail_main_div'>
            <div style={{ display: 'flex', flex: '0.1' }}>
                <img className='ChatsDetail_img img_border' src={img} alt="{img} " />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '0.9' }}>
                <div className='Chatdetail_main_div_inner_div'>
                    <p style={{ fontWeight: 'bolder' }}>{Heading}</p>

                </div>
                <div className="Chatdetail_main_div_inner_div_sms">
                    <p>{time}</p>
                </div>
                <div className="ChatsDetail_hr_line"> <hr /></div>
            </div>
        </div>
    )
}

export default StatusDetail
