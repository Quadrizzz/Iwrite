import React ,{Fragment} from 'react';
import { useHistory } from "react-router-dom";
import Store from 'store';
import { useFormik } from 'formik';
import './main.css';



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

const Register = ({set_id, setLoading, props})=>{
    const history = useHistory()
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
                  setLoading(false)
                  console.log(data.id)
                  set_id(data.id)
                  Store.set('id' , data.id)
                  history.push(`/uploadprofileimage`)
              }
          })
          .catch(err => {
              console.log(err)
              setLoading(false)
          })
        }
      });

      return (
        <Fragment>
            <div className = "div_main">
                <div className = "div_registration_container">
                    <form onSubmit={formik.handleSubmit} className = "register_form">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            placeholder = "Name"
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className = "error">{formik.errors.name}</div>
                        ) : null}
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder = "Email"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className = "error">{formik.errors.email}</div>
                        ) : null}
                        <input
                            id="penname"
                            name="penname"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.penname}
                            placeholder = "Penname"
                        />
                        {formik.touched.penname && formik.errors.penname ? (
                            <div className = "error">{formik.errors.penname}</div>
                        ) : null}
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder = "Password"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className = "error">{formik.errors.password}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        </Fragment>
      );
}

export default Register
