import React ,{Component, Fragment} from 'react';
import axios from 'axios';
import './register.css';
import img from './2678144.jpg'


class Register extends Component {
    constructor(){
        super();
        this.state = {
            Email : '',
            Penname : '',
            Name : '',
            message : ''
        }
    }

    onChangeName = (e)=>{
        this.setState({Name : e.target.value})
    }

    onChangePenname = (e)=>{
        this.setState({Penname : e.target.value})
    }

    onChangeEmail = (e)=>{
        this.setState({Email : e.target.value})
    }



    onSubmit = async (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('name' , this.state.Name);
        formdata.append('email' , this.state.Email);
        formdata.append('penname' , this.state.Penname)
        try{
            const res = await axios.post('http://localhost:5000/register', formdata, {
                header : {
                    'Content-Type' : 'multipart/form-data'
                }
            })

            this.setState({message : res.data})
        }
        finally{
            console.log(this.state.message)
        }
        // catch(err){
        //     if(err.response.status === 500){
        //         this.setState({message : 'server error'})
        //     }
        //     else{
        //         this.setState({message : 'error uploading the file'})
        //     }
        }
        



    

    render(){
        return(
            <Fragment>
                <div id ='main'>
                    <div id ="button-container">
                        <button className = "grow">Home</button>
                        <button className = "grow" >Collections</button>
                        <button className = "grow" >About</button>
                        <button className = "grow" >Contacts</button>
                    </div>
                    <div id = 'form-data1'>
                        <form id = 'form1' onSubmit = {this.onSubmit}>
                            <h1 className = 'blue'>Register to be one of our writers</h1>
                            <div>
                                <p className = 'blue'>Name :</p>
                                <input type = 'text' id = 'name' onChange = {this.onChangeName} >

                                </input>
                                <p className = 'blue'>Email : </p>
                                <input type = 'email' id = "email" onChange = {this.onChangeEmail}  >

                                </input>
                                <p className = 'blue'>Pen Name :</p>
                                <input type = 'text' id = '1penname' onChange = {this.onChangePenname} >

                                </input>
                            </div>
                            <input type = 'submit' id = 'submit' value = 'Submit' className ="grow"></input>
                        </form>
                        <img src= {img} alt = 'e-library' width = '600px' height = '600px'></img>
                    </div>
                </div>
            </Fragment>
        )
    }
   
}

export default Register; 