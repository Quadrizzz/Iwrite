import React from 'react';
import "./articleUpload.css";
import img from './3323585.jpg';
import bold from './format_bold-24px.svg'


const ArticleUpload = ()=>{
    return(
        <div id = "main-container">
            <div id = 'main'>
                <div id ="button-container">
                    <button className = "grow">Home</button>
                    <button className = "grow" >Collections</button>
                    <button className = "grow" >About</button>
                    <button className = "grow" >Contacts</button>
                </div>
                <div id = "article">
                    <img src = {img} alt = "upload" width = '600px' height = '600px'></img>
                    <div id = "article-container">
                        <input type = 'text' placeholder = 'Header'></input>
                        <div className = "edit-menu">
                            <img src = {bold}></img>
                        </div>
                        <div id = "text-box" contentEditable = 'true'>
                            This content can be edited
                        </div>
                        <button className = "grow">Upload</button>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default ArticleUpload;