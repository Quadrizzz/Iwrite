import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'


const Navigation = ()=>{
    return (

        <div className ="nav-container">
             <div>
                <Link to = '/'>
                    <button >Home</button>
                </Link>
                <Link to = '/about'>
                    <button >About</button>
                </Link>
                <Link to = '/contacts'>
                    <button >Contacts</button>
                </Link>
            </div>
            <div className = "account_div">
                <Link to = "/login"> 
                    <button>Login</button>
                </Link>
                <Link to = '/signup'>
                    <button id ="signup_button">Sign Up</button>
                </Link>
             </div>
        </div>

    )
}

export default Navigation;