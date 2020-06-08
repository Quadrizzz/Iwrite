import React from 'react';
import { Fade } from 'react-slideshow-image';
import './slider.css';
import img1 from './27833.jpg';
import img2 from './3529668.jpg'
import img3 from './5234.jpg'
import logo from './Logo.PNG'

const slides = [
img1, img2, img3
]

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
   
  const Slideshow = ({onRouteChange}) => {
    return (
      <div className="slide-container">
        <div id = "header">
          <img src= {logo} alt ="logo" width = "180px" height ="50px" className ="ml2"></img>
          <div>
              <button className = "grow" onClick = {()=>{onRouteChange('home')}}>Home</button>
              <button className = "grow" onClick = {()=>{onRouteChange('library')}}>Collections</button>
              <button className = "grow" onClick = {()=>{onRouteChange('about')}}>About</button>
              <button className = "grow" onClick = {()=>{onRouteChange('contacts')}}>Contacts</button>
          </div>
        </div>
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={slides[0]}  alt="Library"/>
            </div>
            <div>
                <h1 className = "text-container red f1">Welcome to my online library</h1>
                <h2 className = "gray">Browse through my amazing collection of literary works</h2>
                <button className = "grow h3 w5 bw0 br3 white f2 mt2 bg-red">Get Started</button>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={slides[1]}  alt="Literature"/>
            </div>
            <div className = "text-container">
                <h1 id ="lh1" className ="f1">Explore different genres of literature</h1>
                <h2 className = "gray">I offer the best of all genres of literature<br></br>
                from poetry to prose and any other you could think of
                </h2>
                <button className = "grow h3 w5 bw0 br3 white f2 mt2" id = "lbutton">Learn More</button>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={slides[2]} alt="Community" />
            </div>
            <div className = "text-container">
                <h1 className = "f1" id = "ch1">Be one of our featured writers</h1>
                <h2 className = "gray">You can have one of your literary works<br></br>displayed on this Library</h2>
                <button className = "grow h3 w5 bw0 br3 white f2 mt2" id = "cbutton">Learn More</button>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
  export default Slideshow;