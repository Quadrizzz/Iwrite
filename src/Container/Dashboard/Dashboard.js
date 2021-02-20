import React, {useState, useEffect} from 'react';
import './Dashboard.css'

const Dashboard = ({id, set_id , props})=>{
    const [userdata, setdata] = useState('',{})
    const [backup_id, set_backup] = useState(id, '')

    useEffect(() => {
        localStorage.setItem("id", id)
        const test = localStorage.getItem("id")
        console.log(`this is ${test}`)
    }, [id])

    useEffect(() => {
        const parsedId = (localStorage.getItem("id"))
        set_backup(parsedId)
        console.log(backup_id)
    }, [backup_id])


    useEffect( ()=>{
        fetchItems();
    })

    const fetchItems = ()=>{
        fetch('http://localhost:5000/getprofile', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : `${id ? id : backup_id}`
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
            console.log(err)
        })
    }

    return (
        <div className = "main">
            <div className = "Navigation">
                <div className = "Top_nav">
                    <h1 className = "welcome_text">Welcome, {userdata.name}</h1>
                </div>
            </div>  
        </div>
    )
}

export default Dashboard;