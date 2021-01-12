import React from 'react';
// import { Fade } from 'react-slideshow-image';
import Navigation from '../Navigation/navigation';
import './slider.css';

   
  const Slideshow = ({onRouteChange}) => {
    return (
      <div className="slide-container">
        <Navigation/>
        <h1>Home Page</h1>
       
      </div>
    )
  }
  export default Slideshow;