import React from 'react';
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="side-bar">
              <div>
                <img src="/img/sidebar/home-icon.png" alt="" class="icon-sidebar"/>
                <img src="/img/sidebar/folder-icon.png" alt="" class="icon-sidebar"/>
                <img src="/img/sidebar/calendar-icon.png" alt="" class="icon-sidebar"/>
                <div>
                    <img src="/img/sidebar/message-icon.png" alt="" class="icon-sidebar message-opacity"/>
                    <span class="notification">   </span>
                </div>
                <img src="/img/sidebar/visio-icon.png" alt="" class="icon-sidebar"/>
                <img src="/img/sidebar/formation-icon.png" alt="" class="icon-sidebar"/>
            </div>
            <div>
                <img src="/img/sidebar/profile-icon.png" alt="" class="icon-sidebar"/>
                <img src="/img/sidebar/setting-icon.png" alt="" class="icon-sidebar"/>
            </div>
        </div>
    );
};

export default Sidebar;