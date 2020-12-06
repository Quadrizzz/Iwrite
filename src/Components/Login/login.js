import React ,{Component, Fragment} from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';
import './login.css'


const particle_params = {
    particles:{
        line_linked:{
            shadow:{
                enable: true,
                color: '#FFDF00',
                blur: 10
            }
        },
        number:{
            value: 100,
            density:{
                enable: true,
                value_area: 800
            }
        }
    }
}

class Login extends Component{
    constructor(){
        super();
        this.state = {
            penname:'',
            password:''
        }
    }

    onChangePenname = (e)=>{
        this.setState({penname : e.target.value })
    }

    onChangePassword = (e) =>{
        this.setState({password : e.target.value})
    }

    // onSubmit = ()=>{
    //     fetch("http://localhost:5000/login", {
    //         method : 'POST',
    //         headers : {
    //           'Content-Type': 'application/json'
    //         },
    //         body : JSON.stringify({
    //             penname: `${values.penname}`,
    //             password: `${values.password}`
    //         })
    //     })
    //     .then( response => response.json())
    //     .then(data => {
    //         if(data){
    //             console.log('success')
    //         }
    //     })
    //     .catch(err => {
    //         console.log('failure')
    //     })
    // }


    render(){
        return(
            <Fragment>
                <Particles params = {particle_params} className = 'particles'/>
                <div id ='main'>
                    <div id ="button-container">
                        <div>
                            <button className = "grow" onClick = {()=>{this.props.onRouteChange('home')}}>Home</button>
                            <button className = "grow" >About</button>
                            <button className = "grow" >Contacts</button>
                        </div>
                        <div>
                        <button className = "grow" >Login</button>
                            <button className = "grow" >Register</button>
                        </div>
                    </div>
                    <div id = 'form-data1'>
                        <form id = 'form1' onSubmit = {this.onSubmit}>
                            <h1>Login</h1>
                            <div>
                                <p>Pen Name :</p>
                                <input type = 'text' id = '1penname' onChange = {this.onChangePenname} >

                                </input>

                                <p>Password :</p>
                                <input type = 'password' id = '1penname' onChange = {this.onChangePassword} >

                                </input>
 
                            </div>
                            <input type = 'submit' id = 'submit' value = 'Submit' className ="grow" onClick = {this.onSubmit}></input>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login