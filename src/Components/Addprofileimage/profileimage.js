import React , {useState} from 'react'
import './profileimage.css'

const ProfileImage = ()=>{
    // const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    
    const addImage = (e)=>{
        const files = e.target.files
        setImage(files[0])
        console.log(image)
    }

    const uploadImage = ({id})=>{
        console.log(image)
        const info = new FormData();
        info.append('file', image)
        info.append('id', `${id}`)
        fetch("http://localhost:5000/profileimage",{
            method: 'POST',
            body: info
        })
        .then( response =>{
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log('Not successful')
        })
    }


    return(
        <div>
            <h1>Add profile image</h1>
            <input type = 'file' name = 'file' placeholder = 'Upload an image'
             onChange = {addImage} />
            <button onClick = {uploadImage}>Set Image</button>
        </div>
    )
}

export default ProfileImage;