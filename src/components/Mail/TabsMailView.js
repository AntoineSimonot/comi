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
        <div className="sender-img">
          <div className="profil-img"></div>
          <div className="mail-notification"></div>
        </div>
        <p className="mail-title">{message.title}</p>
        <p className="mail-content">
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
      <div className="content-message">
        <span>Date</span>
        <div className="mail">
        {mailCreation()}
        </div>
      </div>
    </div>
  );
};

export default TabsMailView;
