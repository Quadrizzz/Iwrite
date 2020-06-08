import React from 'react';
// import About from './Components/About/about'
// import Slideshow from './Components/Slider/Slider'
// import Contacts from './Components/Contacts/contacts'
import Upload from './Components/Upload/upload'
// import Register from './Components/Register/register'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route : "home"
    }
}

onRouteChange = (input) => {
  this.setState({ route : input})
}

render(){
  return(
    <div>
      <Upload/>
      {/* <Register/> */}
    </div>
  )
  // const {route} = this.state
  // if( route === 'home'){
  //   return(
  //     <Slideshow onRouteChange = { this.onRouteChange }/>
  //   )
  // }
  // if( route === 'about'){
  //   return (
  //     <div>
  //       <About onRouteChange = { this.onRouteChange }/>
  //     </div>
  //   )
  // }
  // if(route === 'contacts'){
  //   return(
  //     <Contacts onRouteChange = { this.onRouteChange }/>
  //   )
  // }
}
}

export default App;
