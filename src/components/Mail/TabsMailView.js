import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Show from "./Show";
import "./TabsMailView.scss";
const axios = require('axios').default;



const TabsMailView = (props) => {

    
  
    const [data, setData] = useState ([])
    const [fetch, setFetch] = useState (true)
    const [url, setUrl] = useState (["unread"])
    const [projet, setprojet] = useState (false)
    const [show, setShow] = useState ()
    let { ChangeURL } = props

    useEffect(() => {
      if (ChangeURL != url) {
        setUrl(ChangeURL)
        setFetch(true)
      }
     
      if (fetch) {
          axios.get(`http://localhost:3000/messages/${url}`).then(function (response) {
          setData(response.data)
          setFetch(false)
        })
      } 

    }, [data,ChangeURL,fetch, url, projet])


    const changeVariableProject = (urlName) => {
      setUrl(urlName)
      setFetch(true)
    } 

    const showMail = (id) => {
      setShow(id)
    } 
    
    const mailCreation = () => {

      const liste = []

      if (url !== "project") {
        for (const message of data) {
          liste.push(
          <div className="message" onClick={() => showMail(message)}>
            <input type="checkbox" class="check" />
            <div class="sender-img">
              <div class="profil-img"></div>
              <div class="mail-notification"></div>
            </div>
            <p class="mail-title">{message.title}</p>
            <p class="mail-content">
            {message.content}
            </p>
          </div>
          )
        }
      }
      else{
        for (const projet of data) {
          liste.push(
          <div>
            <p onClick={() => changeVariableProject(`unread/${projet.name}`)} class="mail-title">{projet.name}</p>
          </div>
          )
        }
      }

    return liste
  };

  return (
    <div className="content-msgPage">
      <SearchBar />
      <div className="content-message">
        <span>Date</span>
        <div className="mail">
        {mailCreation()}
        
         {(() => {
        if (show) {
          return  <Show id = { show }></Show>;
        } 
      })()}
        </div>
      </div>
    </div>
  );
};

export default TabsMailView;
