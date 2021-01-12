import React ,{Fragment} from 'react';
import Particles from 'react-particles-js';
// import './register.css';
import Logo from './logo.jpg';
import { useHistory } from "react-router-dom";
import Navigation from '../Navigation/navigation';
import { useFormik } from 'formik';



   
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

const Login = ({set_id, props})=>{
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
          penname: '',
          password:''
        },
        onSubmit: values => {
          fetch("http://localhost:5000/login", {
              method : 'POST',
              headers : {
                'Content-Type': 'application/json'
              },
              body : JSON.stringify({
                  penname: `${values.penname}`,
                  password: `${values.password}`
              })
          })
          .then( response =>{
               return response.json()})
          .then(data => {
              if(data.id){
                  console.log(data.id)
                  set_id(data.id)
                  history.push(`/dashboard/${data.id}`)
              }
          })
          .catch(err => {
              console.log(err)
          })
        }
      });

      return (
        <Fragment>
            <Navigation/>
             <Particles params = {particle_params} className = 'particles'/> 
            <div className = "main">
                <div className = "logo_container">
                    <img src = {Logo} alt = "logo"/>
                </div>
                <div className = "registration_container">
                    <h1>Login</h1>
                    <form onSubmit={formik.handleSubmit} className = "register_form">
                        <label htmlFor="penname">Penname</label>
                        <input
                            id="penname"
                            name="penname"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.penname}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        </Fragment>
      );
}


export default Login