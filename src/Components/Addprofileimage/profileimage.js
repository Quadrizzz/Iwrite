import React , {useState} from 'react'
import { useHistory } from "react-router-dom";
import './profileimage.css';
import Dropzone from 'react-dropzone'
import picture from './user.png'

const ProfileImage = ({id, props})=>{
    const history = useHistory()
    // const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [isImage, setIsImage] = useState(false) 
    
    // const addImage = (e)=>{
    //     const files = e.target.files
    //     setImage(files[0])
    //     console.log(image)
    // }

    const skip = ()=>{
        history.push(`/dashboard/${id}`)
    }

    const uploadImage = ()=>{
        console.log(id)
        console.log(image)
        const info = new FormData();
        info.append('file', image)
        info.append('upload_preset', 'profileimage')
        fetch('https://api.cloudinary.com/v1_1/azur-xx/image/upload',{
            method: 'POST',
            body: info
        })
        .then( response =>{
            return response.json()
        })
        .then(data => {
            console.log(data.secure_url)
            fetch("http://localhost:5000/profileimage", {
                method : 'PUT',
                headers : {
                  'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    id: `${id}`,
                    url: `${data.secure_url}`
                })
            })
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log(result[0])
                history.push(`/dashboard/${id}`)
            })
            .catch(err=> {
                console.log(err)
            })
        })
        .catch(err => {
            console.log('Not successful')
        })
    }

    return(
        <div className = 'main_upload'>
            <div className = "image_div">
                <img src = {image ?  URL.createObjectURL(image): picture} alt = "  "></img>
            </div>
            <h1>Add a profile image</h1>
            <p>You can skip this step and add a picture later</p>
            <Dropzone onDrop={acceptedFiles =>{ 
                setIsImage(true)
                setImage(acceptedFiles[0])
            }
            }
                >
                {({getRootProps, getInputProps}) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>{isImage ? "Upload this image" : "Drag 'n' drop Image"}</p>
                    </div>
                </section>
                )}
            </Dropzone>
            <div className = 'buttons'>
                <button onClick = {uploadImage}>Upload Image</button>
                <button id = 'skip' onClick = {skip}>Skip</button>
            </div>
        </div>
    )


    // return(
    //     <div>
    //         <h1>Add profile image</h1>
    //         <input type = 'file' name = 'file' placeholder = 'Upload an image'
    //          onChange = {addImage} />
    //         <button onClick = {uploadImage}>Set Image</button>
    //     </div>
    // )
}

export default ProfileImage;