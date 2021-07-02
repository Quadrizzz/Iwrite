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
            uploadMessage : '',
            formstep: 0,
            errorMessage: false,
            bookName: '',
            Author: '',
            genre: ''
        }

        this.setbookName = this.setbookName.bind(this);
        this.setAuthor = this.setAuthor.bind(this)
        this.setGenre = this.setGenre.bind(this)
       
    }



    showWidget = (widget)=>{
        widget.open()
    }

//     validateUpdate = ()=>{
//         fetch('http://localhost:5000/validateUpload' , {
//             method : 'post',
//             headers : {'Content-Type' : 'application/json'},
//             body : JSON.stringify({
//                 penname : this.state.penname
//             })
//         }).then(response => {
//             if(response.status === 200){
//                 this.showWidget(this.state.widget)
//             }
//             else{
//                 this.setState({uploadMessage : 'Register to be a writer'})
//             }
//         })
//    }

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

    setbookName = (event)=>{
        this.setState({bookName : event.target.value})
    }

    setAuthor = (event)=>{
        this.setState({Author : event.target.value})
    }

    setGenre = (event)=>{
        this.setState({genre : event.target.value})
    }
    step = (n)=>{
        if(n === 1){
            if(this.state.Author === '' || this.state.bookName === ''){
                this.setState({errorMessage : true})
            }
            else{
                this.setState({formstep : n})
                this.setState({errorMessage : false})
            }
        }
        else{
            this.setState({formstep : n})
            this.setState({errorMessage : false})
        }

    }
    render(){
            return(
                <Fragment>
                    <div id = 'main'>
                        
                        <div className = "sub_main">
                            <div className = "form">
                                <h1 className = "f1 blue">Upload a book</h1>
                                { this.state.formstep === 1 ?
                                <div class = "form_button_container">
                                    <button className = "grow gen_button" onClick = {()=>{ this.showWidget(this.state.widget)}}>Upload File</button>
                                    <button className = "grow prev_button" onClick = {()=>{this.step(0)}}>Previous</button>
                                </div> : 
                                    <div className = "form_input_container">
                                        {this.state.errorMessage ? <p className = "red">Please enter the Book name, Author's name and Genre</p> : null}
                                        <input type = 'text' placeholder = {this.state.bookName !== '' ? this.state.bookName : "Book Name"} onChange = {this.setbookName}>
                                        </input>
                                        <input type = 'text' placeholder = {this.state.Author !== '' ? this.state.Author : "Author"} onChange = {this.setAuthor}></input>
                                        <input type = 'text' placeholder = {this.state.genre !== '' ? this.state.genre : "Genre"} onChange = {this.setGenre}></input>
                                        <button className = "grow gen_button" onClick = {()=>{this.step(1)}}>Next</button>
                                    </div>
                                }
                            </div>
                            <img src = {img} width = '500px' height = '500px' alt = " "></img>
                        </div>
                    </div>
                </Fragment>
            )
        }
       
    }


export default Upload;