import React, {useState, useEffect} from 'react';
import Store from 'store';
import './Dashboard.css'
import book from './book.png'
import dash from './dashboard.png'
import settings from './settings.png'
import down from './down.png'


const Dashboard = ({id, set_id , props})=>{
    const [userdata, setdata] = useState('',{})
    // const [backup_id, set_backup] = useState(id, '')


    useEffect(() => {
        let mounted = true
        const parsedId = Store.get('id')
        if(mounted){
            set_id(parsedId)
        }
        
        
        fetch('http://localhost:5000/getprofile',  {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : `${id}`
            })
        })
        .then( response =>{ return response.json()})
        .then(data => {
            if(data[0].id){
                setdata(data[0])
            }
            else{
                console.log('error')
                console.log(id)
            }
        })
        .catch(err => {
            // console.log(err)
            console.log("Didn't fetch")
        })

        return ()=>{
            mounted = false
        }
    })


    // useEffect( ()=>{
    //     fetchItems();
    // })


    return (
        <div className = "main">
            <div className = "Navigation">
                <div className = "Top_nav">
                    <div>
                        <button><span><img src = {dash} alt = "work"></img></span>Dashboard</button>
                    </div>
                    <div className = "Sub_Top_nav">
                        <div className = "Sub_Top_nav_div">
                            <button><span><img src = {settings} alt = "wprk"></img></span>Settings</button>
                            <button><span><img src = {book} alt = "work"></img></span>Library</button>
                        </div>
                        <div className = "profile">
                            <button><span><img src = {down} alt = "work"></img></span></button>
                            <img className = "profile_picture" src = "https://image.shutterstock.com/image-photo/living-coral-color-year-2019-260nw-1250940526.jpg" alt = "work" ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "main_section">
                <div className = "main_section_records">
                    <div className = "upload_download">
                        <div className = "download">
                                <h1>Downloads</h1>
                                <h2>{userdata.downloads}</h2>
                        </div>
                        <div className = "uploads">
                                <h1>Uploads</h1>
                                <h2>{userdata.uploads}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;