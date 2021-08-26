import React, { useState} from 'react';
// import About from './Components/About/about'
import Slideshow from './Components/Slider/Slider'
// import Contacts from './Components/Contacts/contacts'
// import Upload from './Components/Upload/upload'
import Dashboard from './Container/Dashboard/Dashboard'
// import ArticleUpload from './Components/articleUpload/articleUpload'
import ProfileImage from './Components/Addprofileimage/profileimage'
// import Navigation from './Components/Navigation/navigation'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';



const App = (props)=> {
  const [id, set_id] = useState('',{})

    return(
      <div className = "App">
        <Router>
          <div>
            <Switch>
            <Route path = '/' 
              exact
              render = {(routeProps)=>(
                <Slideshow {...props} {...routeProps} set_id = {set_id}/>
              )}
             />
             <Route path = '/uploadprofileimage' 
             render = {(routeProps)=>(
               <ProfileImage {...props} {...routeProps} id = {id} />
             )}

             />
             <Route path = '/dashboard/:id'
             render = {(routeProps)=>(
               <Dashboard {...props} {...routeProps} id = {id} set_id = {set_id}/>
             )}/>
            </Switch>
          </div>
        </Router>
      </div>
    
    )
}


export default App;
