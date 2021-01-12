import React, {Fragment, useState, useEffect} from 'react';
import './Dashboard.css'

const Dashboard = ({id})=>{
    useEffect( ()=>{
        fetchItems();
    }, [])

    const [data, setdata] = useState('',{})

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
            if(data.id){
                setdata(data)
            }
            else{
                console.log('error')
                console.log(id)
            }
        })
    }

    return (
        <div>
            <h1>{id}{data}</h1>
        </div>
    )
}

export default Dashboard;