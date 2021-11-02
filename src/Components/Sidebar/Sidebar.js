import React, {useState, useEffect} from 'react';
import Store from 'store';
import './Sidebar.css'


const Sidebar = ({set_id, props})=>{
    
    const [Menu, clicked] = useState("1",{});
    const [userdata, setdata] = useState('',{})
    const parsedId = Store.get('id')


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
    })

    const select_menu = (n)=>{
        clicked(n);
    }

    return(
        <div className="sidebar">
            <h2 className="Welcome_text">{userdata.name}</h2>
            <ul>
                <li className={Menu === "1" ? "menu click" : "menu"}  onClick = {()=>{select_menu("1")}}>Dashboard</li>
                <li className={Menu === "2" ? "menu click" : "menu"}  onClick = {()=>{select_menu("2")}}>Library</li>
                <li className={Menu === "3" ? "menu click" : "menu"}  onClick = {()=>{select_menu("3")}}>Profile</li>
                <li className={Menu === "4" ? "menu click" : "menu"}  onClick = {()=>{select_menu("4")}}>Settings</li>
                <li className={Menu === "5" ? "menu click" : "menu"}  onClick = {()=>{select_menu("5")}}>Sign Out</li>
            </ul>
        </div>
    )
}

export default Sidebar;