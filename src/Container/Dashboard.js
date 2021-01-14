import React, {useState, useEffect} from 'react';
import './Dashboard.css'

const Dashboard = ({id})=>{
    useEffect( ()=>{
        fetchItems();
    }, [])

    const [userdata, setdata] = useState('',{})

    const fetchItems = ()=>{
        fetch('http://localhost:5000/getprofile', {
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
    }

    return (
        <div>
            <h1>{id}{userdata.name}</h1>
        </div>
    )
}

export default Dashboard;