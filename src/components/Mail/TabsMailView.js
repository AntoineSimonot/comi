import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./TabsMailView.scss";
const axios = require('axios').default;

const TabsMailView = (props) => {

    
    const [data, setData] = useState ([])
    const [fetch, setFetch] = useState (true)
    const [url, setUrl] = useState (["unread"])

    const { ChangeURL } = props
  

    useEffect(() => {
      if(ChangeURL != url){
        setUrl(ChangeURL)
        setFetch(true)
        console.log(`http://localhost:3000/messages/${url}`)
      }

      if (fetch) {
          axios.get(`http://localhost:3000/messages/${url}`).then(function (response) {
          setData(response.data);
          setFetch(false)
        })
      } 

    }, [data,ChangeURL,fetch, url])

    const mailCreation = () => {
    const liste = []
    for (const message of data) {
      liste.push(
      <div>
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
    return liste
  };

  return (
    <div className="content-msgPage">
      <SearchBar />
      <div class="content-message">
        <span>Date</span>
        <div class="mail">
        {mailCreation()}
        </div>
      </div>
    </div>
  );
};

export default TabsMailView;