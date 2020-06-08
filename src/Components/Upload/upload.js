import React , { Component, Fragment } from 'react';
import axios from 'axios';
// import cloudinary from 'cloudinary-react';
import './upload.css';
import img from './23674.jpg'

class Upload extends Component {
    constructor(props){
        let widget = window.cloudinary.createUploadWidget({
            cloudName : 'azul',
            uploadPreset : 'mybooks'
        },
        (error , result)=>{this.checkUploadResult(result)}
        )
        super(props)
        this.state = {
            penname : '',
            message : '',
            widget : widget,
            uploadMessage : ''
        }

       
    }



    onChange = (event)=>{
        this.setState({penname : event.target.value})
    }

    showWidget = (widget)=>{
        widget.open()
    }

    validateUpdate = ()=>{
        fetch('http://localhost:5000/validateUpload' , {
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                penname : this.state.penname
            })
        }).then(response => {
            if(response.status === 200){
                this.showWidget(this.state.widget)
            }
            else{
                this.setState({uploadMessage : 'Register to be a writer'})
            }
        })
   }

    checkUploadResult =  (result)=>{
        if(result.event === 'success'){
            const formData = new FormData();
                formData.append('url' , result.info.url)
                formData.append('id' , result.info.public_id)
                try{
                    console.log(this.state.penname)
                    const res =  axios.post('http://localhost:5000/upload' , formData, {
                        headers : {
                            'Content-Type' : 'multipart/form-data'
                        },

                    })
                    console.log(res)
                }
                catch(err){
                            if(err.response.status === 500){
                                this.setState({message : 'server error'})
                            }
                            else{
                                this.setState({message : 'error uploading the file'})
                            }
                        }
        }
    }

    render(){
        // let widget = window.cloudinary.createUploadWidget({
        //     cloudName : 'azul',
        //     uploadPreset : 'mybooks'
        // },
        // (error , result)=>{this.checkUploadResult(result)}
        // )
        if(!this.state.uploadMessage){
            return(
                <Fragment>
                    <div id ="button-container">
                        <button className = "grow">Home</button>
                        <button className = "grow" >Collections</button>
                        <button className = "grow" >About</button>
                        <button className = "grow" >Contacts</button>
                    </div>
                    <div id = 'main'>
                        <div>
                            <h1 className = "f1 blue">Upload a book to our library</h1>
                            <p className = "f2 gray">Add your own works or other<br></br>or other people's work<br></br>
                            (with their permission)<br></br> and share it to the world.
                            </p>
                            <input type = 'text' placeholder = 'Enter your pen name' id = 'penname' onChange = {this.onChange}></input>
                            <button className = "grow" onClick = {this.validateUpdate}>Upload File</button>
                        </div>
                        <img src = {img} width = '500px' height = '500px' alt = " "></img>
                    </div>
                </Fragment>
            )
        }
        else{
            return(
                <Fragment>
                    <div id ="button-container">
                        <button className = "grow">Home</button>
                        <button className = "grow" >Collections</button>
                        <button className = "grow" >About</button>
                        <button className = "grow" >Contacts</button>
                    </div>
                    <div>
                        {this.state.uploadMessage}
                    </div>
                    <div id = 'main'>
                        <div>
                            <h1 className = "f1 blue">Upload a book to our library</h1>
                            <p className = "f2 gray">Add your own works or other<br></br>or other people's work<br></br>
                            (with their permission)<br></br> and share it to the world.
                            </p>
                            <input type = 'text' placeholder = 'Enter your pen name' id = 'penname' onChange = {this.onChange}></input>
                            <button className = "grow" onClick = {this.validateUpdate}>Upload File</button>
                        </div>
                        <img src = {img} width = '500px' height = '500px' alt = " "></img>
                    </div>
                </Fragment>
            )
        }
    }
}

export default Upload;