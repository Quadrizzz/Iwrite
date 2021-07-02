import React, {useState, useEffect} from 'react';
import Store from 'store';
import './Dashboard.css'
// import book from './book.png'
// import dash from './dashboard.png'
// import settings from './settings.png'
// import down from './down.png'
import download from './Downloads.png'
import upload from './Uploads.png'
// import profile from './Profile.jpg'
// import { background } from '@chakra-ui/styled-system';
// import { border } from '@chakra-ui/styled-system';
// import { Icon } from '@material-ui/core';


const Dashboard = ({set_id , props})=>{
    const [userdata, setdata] = useState('',{})
    const parsedId = Store.get('id')
    // const [backup_id, set_backup] = useState(id, '')

    // const TextStyle = {
    //     color: "#fff",
    // };

    // const IconSyle = {
    //     marginTop: "5px",
    // }

    useEffect(() => {
        let mounted = true
        if(mounted){
            set_id(parsedId)
        }
        
        
        fetch('http://localhost:5000/getprofile',  {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : `${parsedId}`
            })
        })
        .then( response =>{ return response.json()})
        .then(data => {
            if(data[0].id){
                setdata(data[0])
                mounted = false
            }
            else{
                console.log('error')
                console.log(parsedId)
            }
        })
        .catch(err => {
            // console.log(err)
            console.log("Didn't fetch")
        })

        return ()=>{
            mounted = false
        }
    }, [])
 

    // useEffect( ()=>{
    //     fetchItems();
    // })


    return (
        <div className = "main">
           <div className = "main_view">
                <div className = "navigation">
                    <div>
                        <h1 id = "hello">Hello, {userdata.name}</h1>
                    </div>
                    <div className = "nav">
                        <p>Dashboardh</p>
                        <p>Book</p>
                        <div className = "profile-image">.</div>
                        <p>Library</p>
                        <p>Settings</p>
                    </div>
                </div>
                {/* <SideNav
                    onSelect={(selected) => {
                    }}
                   style ={{background: '#63ace7', border : 'none'}} >
                    <SideNav.Toggle/>
                    <SideNav.Nav defaultSelected="" className = "NavBar">
                        <NavItem eventKey="dashboard" className ="NavItem">
                            <NavIcon style = {IconSyle}>
                                <img src = {dash} alt = "dashboard"/>
                            </NavIcon>
                            <NavText style ={TextStyle}>
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Library">
                            <NavIcon style = {IconSyle}>
                                <img src ={book} alt = "book"/>
                            </NavIcon>
                            <NavText style = {TextStyle}>
                                Library
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Settings">
                            <NavIcon style = {IconSyle}>
                                <img src = {settings} alt = "settings"/>
                            </NavIcon>
                            <NavText style = {TextStyle}>
                                Settings
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav> */}
                <div className = "main_container">
                    <div className = "stat_container">
                        <div className = "stats">
                            <div className = "downloads">
                                <img src = {download} alt = "download"/>
                                <h1>{userdata.downloads}</h1>
                                <h1 className= "stats_h1">Books Downloaded</h1>
                            </div>
                            <div className = "uploads">
                                <img src = {upload} alt = "upload"/>
                                <h1>{userdata.uploads}</h1>
                                <h1 className= "stats_h1">Books Uploaded</h1>
                            </div>
                        </div>

                        <div className = "bookSliders">
                            <h1 id = "pick">Pick of the day.</h1>
                        </div>

                    </div>
                </div>
           </div>
        </div>
    )
}

export default Dashboard;