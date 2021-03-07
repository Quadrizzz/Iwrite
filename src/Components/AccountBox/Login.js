import React ,{Fragment} from 'react';
import { useHistory } from "react-router-dom";
import Store from 'store';
import { useFormik } from 'formik';
import './main.css'



const Login = ({set_id, setLoading,  props})=>{
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
          penname: '',
          password:''
        },
        onSubmit: values => {
            setLoading(true)
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
                  setLoading(false)
                  console.log(data.id)
                  set_id(data.id)
                  Store.set('id' , data.id)
                  history.push(`/dashboard/${data.id}`)
              }
          })
          .catch(err => {
              setLoading(false)
              console.log(err)
          })
        }
      });

      return (
        <Fragment>
            <div className = "div_main">
                <div className = "div_registration_container">
                    <form onSubmit={formik.handleSubmit} className = "register_form">
                        <input
                            id="penname"
                            name="penname"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.penname}
                            placeholder = "Penname"
                        />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder = "Password"
                        />
                        <p>Forgot password</p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        </Fragment>
      );
}


export default Login