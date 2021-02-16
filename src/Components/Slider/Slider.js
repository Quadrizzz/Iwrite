import React, { useState } from 'react';
import Particles from 'react-particles-js';
// import { Fade } from 'react-slideshow-image';
import spin from './spin.gif'
import Navigation from '../Navigation/navigation';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import './slider.css';

const validate = values =>{
  const errors = {};
  if(!values.name){
      errors.name = "Required"
  }
  else if(values.name.length > 100){
      errors.name = "Shouldn't exceed more than 100 characters"
  }

  if(!values.email){
      errors.email = "Required"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = "This is not a valid email"
  }

  if(!values.password){
      errors.password = "Required"
  }
  else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)){
      errors.password = "Password must contain at least 8 characters long and must contain at least one lower case alphabet, at least one uppercase alphabet, at leat one nummber and at lest one special character"
  }

  if(!values.penname){
      errors.penname = "Required"
  }

  return errors

}


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
    const history = useHistory()
    const [form_state, setForm] = useState('Register')
    const [password, setPassword] = useState('')
    const [penname, setPenname] = useState('')
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
          name: '',
          penname: '',
          email: '',
          password:''
        },
        validate,
        onSubmit: values => {
          setLoading(true)
          fetch("http://localhost:5000/register", {
              method : 'POST',
              headers : {
                'Content-Type': 'application/json'
              },
              body : JSON.stringify({
                  email: `${values.email}`,
                  name: `${values.name}`,
                  penname: `${values.penname}`,
                  password: `${values.password}`
              })
          })
          .then( response =>{
               return response.json()})
          .then(data => {
              if(data.id){
                  set_id(data.id)
                  history.push(`/uploadprofileimage`)
                  setLoading(false)
              }
          })
          .catch(err => {
              setLoading(false)
              console.log(err)
          })
        }
      });

    const changePassword = (event)=>{
        setPassword(event.target.value)
        console.log(password)
    }

    const changePenname = (event)=>{
        setPenname(event.target.value)
        console.log(penname)
    }

    const onSubmit = ()=>{
        setLoading(true)
        fetch("http://localhost:5000/login", {
            method : 'POST',
            headers : {
              'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                penname: `${penname}`,
                password: `${password}`
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
            setLoading(false)
        })
    }

    return (
      <div className="slide-container">
        <Navigation/>
        <div className = {loading ? "loading_div" : "dont_show"}>
            <img src = {spin} alt = "animation"></img>
        </div>
        <Particles params = {particle_params} className = 'particles'/> 
        <div className = "main_container">
            <div className = "text_div">
              <h1>Welcome,<br></br>to my online library </h1>
              <p>Reading is fun,<br></br>I make it more fun</p>
              <p>Download, Upload and Connect with other readers.</p>
            </div>
            <div className = "form-div">
              <div className = {form_state === "Register" ? "signup_form" : "dont_show"}>
                  <h1>Register</h1>
                  <form onSubmit={formik.handleSubmit} className = "signup">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className = "error">{formik.errors.name}</div>
                        ) : null}
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className = "error">{formik.errors.email}</div>
                        ) : null}
                        <label htmlFor="penname">Penname</label>
                        <input
                            id="penname"
                            name="penname"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.penname}
                        />
                        {formik.touched.penname && formik.errors.penname ? (
                            <div className = "error">{formik.errors.penname}</div>
                        ) : null}
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className = "error">{formik.errors.password}</div>
                        ) : null}
                        <button type="submit" id = "submit">Submit</button>
                    </form>
              </div>

              <div className = {form_state === "Login" ? "signup_form" : "dont_show"}>
                    <h1>Login</h1>
                    <div  className = "signup">
                        <label htmlFor="penname">Penname</label>
                        <input
                            id="penname"
                            name="penname"
                            type="text"
                            onChange = {changePenname}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange = {changePassword}
                        />
                        <button type="submit" className = "login_submit" onClick = {()=>{onSubmit()}}>Submit</button>
                    </div>
              </div>


              <div className = "switch-button">
                <button id = {form_state === "Register" ? "button1" : "disabled"} onClick = {()=>{setForm("Register")}}>
                    Sign Up
                </button>
                <button id = {form_state === "Login" ? "button1" : "disabled"} onClick = {()=>{setForm("Login")}}>
                    Log in
                </button>
              </div>
            </div>
        </div>
       
      </div>
    )
  }
  export default Slideshow;