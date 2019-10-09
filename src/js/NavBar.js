import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Component} from 'react'; 

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <header className="header_nav">
                    <div className="header_nav_inner">
                        <Link to={`/`}>
                        <img src = "../.././Icons/BrainFlixLogo.svg" className="BrainFlix_Logo"/>
                        </Link>
                        <div className="search_div">
                            <form className="search_input">
                                <input type="text" placeholder="Search" className="search_text_area"/>
                            </form>
                            <div className="search_icon_div">
                            <img src = "../.././Icons/Search.svg" className="search_icon"/> 
                            </div>                   
                        </div>

                        <div className="nav_right_icons">
                                                           
                                <Link to={`/Upload`}>
                                    <img src="../.././Icons/ContentUpload.svg" className="upload_icon"/> 
                                </Link>   
                            
                            <img src="../.././Images/john_gibbons.jpg" className="user_profile_icon"/> 
                        </div>

                    </div> 
                </header>

               

            </div>

            
        )
    }
}

export default NavBar;