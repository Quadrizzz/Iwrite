import React, { useState} from 'react';
import Particles from 'react-particles-js';
// import { Fade } from 'react-slideshow-image';
import spin from './spin.gif'
import Navigation from '../Navigation/navigation';
import './slider.css';
import {AccountBox} from '../AccountBox/index'


const particle_params = {
    particles:{
        line_linked:{
            shadow:{
                enable: true,
                color: '000080',
                blur: 1
            }
        },
        number:{
            value: 150,
            density:{
                enable: true,
                value_area: 800
            }
        }
    }
}


   
  const Slideshow = ({set_id, props}) => {
      const [loading , setLoading] = useState(false)
   
    return (
      <div className="slide-container">
        <Navigation/>
        <div className = {loading ? "loading_div" : "dont_show"}>
            <img src = {spin} alt = "animation"></img>
        </div>
        <Particles params = {particle_params} className = 'particles'/> 
        <div className = "main_container">
            <div className = "text_div">
              <h1 className = "text">Welcome,<br></br>to my online library </h1>
              <p className = "text">Reading is fun,<br></br>I make it more fun</p>
              <p className = "text">Download, Upload and Connect with other readers.</p>
            </div>
            <div>
                <AccountBox set_id = {set_id} setLoading = {setLoading} />
            </div>
        </div>
       
      </div>
    )
  }
  export default Slideshow;