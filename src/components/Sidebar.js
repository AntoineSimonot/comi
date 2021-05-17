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
import Auth from '../services/Auth';


const Sidebar = () => {
    let history = useHistory();
    let location = useLocation();

    let signout = () => {
        localStorage.clear();
        history.push('/login');
        // Auth.signout(() => {
        // history.push('/');
        // });
    };
    
    return (
        <div className="side-bar">
              <div>
                <img src="/img/sidebar/home-icon.png" alt="" className="icon-sidebar"/>
                <img src="/img/sidebar/folder-icon.png" alt="" className="icon-sidebar"/>
                <img src="/img/sidebar/calendar-icon.png" alt="" className="icon-sidebar"/>
                <div>
                    <img src="/img/sidebar/message-icon.png" alt="" className="icon-sidebar message-opacity"/>
                    <span className="notification">   </span>
                </div>
                <img src="/img/sidebar/visio-icon.png" alt="" className="icon-sidebar"/>
                <img src="/img/sidebar/formation-icon.png" alt="" className="icon-sidebar"/>
            </div>
            <div>
                <img src="/img/sidebar/profile-icon.png" alt="" className="icon-sidebar" onClick={ signout }/>
                <img src="/img/sidebar/setting-icon.png" alt="" className="icon-sidebar"/>
            </div>
        </div>
    );
};

export default Sidebar;