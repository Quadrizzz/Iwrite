import React from 'react';
import './contacts.css';
import img from './img.jpg'

const Contacts = ( {onRouteChange})=>{
    return(
        <div>
            <div id ="button-container">
                <button className = "grow" onClick = {()=>{onRouteChange('home')}}>Home</button>
                <button className = "grow" onClick = {()=>{onRouteChange('library')}}>Collections</button>
                <button className = "grow" onClick = {()=>{onRouteChange('about')}}>About</button>
                <button className = "grow" onClick = {()=>{onRouteChange('contacts')}}>Contacts</button>
            </div>

            <div id = "main-container">
                <div id = "sub">
                    <div>
                        <p className = "blue f2 ml3">I'll Love to Hear From You.</p>
                        <h2 className = "gray f2 ml3">Give your suggestions<br></br>on how to make this<br></br>
                            a better experience
                        </h2>
                        <h3 className = "gray f2 ml3">Email : mackquadrizz@gmail.com</h3>
                        <button className = "grow f2 ml3" onClick = {()=>{onRouteChange('home')}} >Go Back</button>
                    </div>
                    <img src = {img} alt = "Contact Us" width = "600px"></img>
                </div>
            </div>
        </div>
    )
}

export default Contacts