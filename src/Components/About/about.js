import React from 'react';
import './about.css';
import img from './3630156.jpg'

const About = ( {onRouteChange} )=>{
    return(
        <div id ="container">
            <div id ="button-container">
                <button className = "grow" onClick = {()=>{onRouteChange('home')}}>Home</button>
                <button className = "grow" onClick = {()=>{onRouteChange('library')}}>Collections</button>
                <button className = "grow" onClick = {()=>{onRouteChange('about')}}>About</button>
                <button className = "grow" onClick = {()=>{onRouteChange('contacts')}}>Contacts</button>
            </div>
            <div id = "main">
                <div id = "image-container">
                    <div>
                        <h1 className= "f2 red ml3">The Story Behind<br></br>My e-Library</h1>
                        <p className= "f3 gray ml3 mt5">After loosing my works multiple times,<br></br>I decided to create<br></br>
                            A place to store my works<br></br>and also help people show<br></br>
                            their works to the world
                        </p>
                        <button className = "ml3 f3 grow" onClick = {()=>{onRouteChange('home')}}>Go Back</button>
                    </div>
                    <img src = {img} alt = "About" width = "600px" className = "ml5"></img>
                </div>
            </div>
        </div>
    )
}

export default About;