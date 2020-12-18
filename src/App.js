import React from 'react';
import About from './Components/About/about'
import Slideshow from './Components/Slider/Slider'
import Contacts from './Components/Contacts/contacts'
import Upload from './Components/Upload/upload'
import Register from './Components/Register/register'
import ArticleUpload from './Components/articleUpload/articleUpload'
import Login from './Components/Login/login'
import Navigation from './Components/Navigation/navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      id : null
    }
}

set_id = (num)=>{
  this.setState({id : num})
  console.log(this.state.id)
}

render(){

    return(
      <div className = "App">
        <Router>
          <div>
            <Navigation/>
            <Switch>
              <Route path = "/" exact component = {Slideshow} />
              <Route path = '/signup' 
              render={(routeProps)=>(
                <Register {...this.props} {...routeProps} set_id = {this.set_id}/>
              )}
              />
              <Route path = '/login' component = {Login}/>
            </Switch>
          </div>
        </Router>
      </div>
    
    )
}
}

export default App;
