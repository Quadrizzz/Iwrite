import React, {useState, useEffect} from 'react';
import Store from 'store';
import './Dashboard.css'

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
                    <h1 className = "welcome_text">Welcome, {userdata.name}</h1>
                </div>
            </div>  
        </div>
    )
}

export default Dashboard;