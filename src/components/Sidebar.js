import React from 'react';
import './Sidebar.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


const Sidebar = () => {
    let history = useHistory();
    let location = useLocation();

    let signout = () => {
        localStorage.clear();                    //Clear le local storage pour enlever la session 
        history.push('/');                  // Redirection                        
    };
    let formationLink = () => {
        history.push('/formation');
    }
    let calendarLink = () => {
        history.push('/calendar');
    }
    let formationMail = () => {
        history.push('/mail');
    }
    let visioLink = () => {
        history.push('/visio');
    }
    let fileLink = () => {
        history.push('/file');
    }
// -----------------------------Icone pour la sidebar----------------------------------------
    let mail = "/img/sidebar/message-icon.png"
    let home = "/img/sidebar/home-icon.png"
    let folder = "/img/sidebar/folder-icon.png"
    let calendar = "/img/sidebar/calendar-icon.png"
    let visio = "/img/sidebar/visio-icon.png"
    let formation = "/img/sidebar/formation-icon.png"
    let profile = "/img/sidebar/profile-icon.png"
    let setting = "/img/sidebar/setting-icon.png"
// ------------------------------------------------------------------------------------------

// -----------------------------Switch pour changer l'icone une fois sur la page en question ----------------------------------------
    switch (true){
        case window.location.pathname === '/mail':
            mail = "/img/sidebar/message-icon-active.png";        // mail active
            break;
        case window.location.pathname === '/formation':
            formation = "/img/sidebar/formation-icon-active.png";  // formation active
            break;
        case window.location.pathname === '/calendar':
            calendar = "/img/sidebar/calendar-icon-active.png";  // calendar active
            break;
        case window.location.pathname === '/visio':
            visio = "/img/sidebar/visio-icon-active.png";  // calendar active
            break;
        case window.location.pathname === '/folder':
            calendar = "/img/sidebar/folder-icon-active.png";  // calendar active
            break;
        case window.location.pathname === '/file':
            folder = "/img/sidebar/folder-icon-active.png";  // calendar active
            break;
        default:
            home = "/img/sidebar/home-icon.png";
            break;
    }
// ----------------------------------------------------------------------------------------------------------------------------------




// JSX
    return (
        <div className="side-bar">
              <div>
                <img src={home} alt="" className="icon-sidebar"/>
                <img src={folder} alt="" className="icon-sidebar" onClick={ fileLink }/>
                <img src={calendar} alt="" className="icon-sidebar" onClick={ calendarLink }/>
                <div>
                    <img src={mail}  alt="" className="icon-sidebar" onClick={ formationMail }/>
                    <span className="notification">   </span>
                </div>
                <img src={visio} alt="" className="icon-sidebar" onClick={ visioLink }/>
                <img src={formation}  alt="" className="icon-sidebar" onClick={ formationLink }/>
            </div>
            <div>
                <img src={profile} alt="" className="icon-sidebar" onClick={ signout }/>
                <img src={setting} alt="" className="icon-sidebar"/>
            </div>
        </div>
    );
};

export default Sidebar;