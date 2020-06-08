import React from 'react';
import './message.css'

const Progress = ({percentage})=>{
    return(
         <div style = {{width : `${percentage}%`}} id = "progress-bar">
            {percentage}%
        </div>
        
    )
}

export default Progress;