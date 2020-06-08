import React from 'react';
import './message.css'

const Messages = ({msg, cancelMessage})=>{
    return(
        <div id = 'message-box'>
            <p className = "white f3">{msg}</p>
            <button onClick = {()=>{cancelMessage()}}>&#120325;</button>
        </div>
    )
}

export default Messages