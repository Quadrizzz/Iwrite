import React ,{Fragment} from 'react';
import Particles from 'react-particles-js';
import './register.css';
import Logo from './logo.jpg';
import { useHistory } from "react-router-dom";
// import Navigation from '../Navigation/navigation';
import { useFormik } from 'formik';



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

const Register = ({set_id, props})=>{
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
              if(data){
                  console.log(data)
                  set_id(data[0].id)
                  history.push(`/dashboard/${data[0].id}`)
              }
          })
          .catch(err => {
              console.log(err)
          })
        },
      });

      return (
        <Fragment>
             <Particles params = {particle_params} className = 'particles'/> 
            <div className = "main">
                <div className = "logo_container">
                    <img src = {Logo} alt = "logo"/>
                </div>
                <div className = "registration_container">
                    <h1>Register</h1>
                    <form onSubmit={formik.handleSubmit} className = "register_form">
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
                        <label htmlFor="email">Emai</label>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        </Fragment>
      );
}

// class Register extends Component {
//     constructor(){
//         super();
//         this.state = {
//             Email : '',
//             Penname : '',
//             Name : '',
//             message : ''
//         }
//     }


//     onChangeName = (e)=>{
//         this.setState({Name : e.target.value})
//     }

//     onChangePenname = (e)=>{
//         this.setState({Penname : e.target.value})
//     }

//     onChangeEmail = (e)=>{
//         this.setState({Email : e.target.value})
//     }



//     onSubmit = async (e)=>{
//         e.preventDefault();
//         const formdata = new FormData();
//         formdata.append('name' , this.state.Name);
//         formdata.append('email' , this.state.Email);
//         formdata.append('penname' , this.state.Penname)
//         try{
//             const res = await axios.post('http://localhost:5000/register', formdata, {
//                 header : {
//                     'Content-Type' : 'multipart/form-data'
//                 }
//             })

//             this.setState({message : res.data})
//         }
//         finally{
//             console.log(this.state.message)
//         }
//         // catch(err){
//         //     if(err.response.status === 500){
//         //         this.setState({message : 'server error'})
//         //     }
//         //     else{
//         //         this.setState({message : 'error uploading the file'})
//         //     }
//         }
        



    

//     render(){
//         return(
//             <Fragment>
//                 <Particles params = {particle_params} className = 'particles'/>
//                 <div id ='main'>
//                     <div id ="button-container">
//                         <div>
//                             <button className = "grow" >Home</button>
//                             <button className = "grow" >About</button>
//                             <button className = "grow" >Contacts</button>
//                         </div>
//                         <div>
//                         <button className = "grow" >Login</button>
//                             <button className = "grow" >Register</button>
//                         </div>
//                     </div>
//                     <div id = 'form-data1'>
//                         <form id = 'form1' onSubmit = {this.onSubmit}>
//                             <h1>Register to be one of our writers</h1>
//                             <div>
//                                 <p>Name :</p>
//                                 <input type = 'text' id = 'name' onChange = {this.onChangeName} >

//                                 </input>
//                                 <p>Email : </p>
//                                 <input type = 'email' id = "email" onChange = {this.onChangeEmail}  >

//                                 </input>

                                
//                                 <p>Password :</p>
//                                 <input type = 'password' id = '1penname' onChange = {this.onChangePenname} >

//                                 </input>

//                                 <p>Pen Name :</p>
//                                 <input type = 'text' id = '1penname' onChange = {this.onChangePenname} >

//                                 </input>

                                
//                             </div>
//                             <input type = 'submit' id = 'submit' value = 'Submit' className ="grow"></input>
//                         </form>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
   
// }

export default Register; 