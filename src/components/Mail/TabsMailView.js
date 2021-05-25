import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Show from "./Show";
import "./TabsMailView.scss";
const axios = require('axios').default;



const TabsMailView = (props) => {

    
  
    const [data, setData] = useState ([])
    const [fetch, setFetch] = useState (true)
    const [url, setUrl] = useState (["unread"])
    const [show, setShow] = useState (false)
    const [projet, setProjet] = useState ([])
    const [change, setChange] = useState (false)
    const [trigger, setTrigger] = useState (false)
    let { ChangeURL } = props

    useEffect(() => {
      if (ChangeURL != url) {
        setUrl(ChangeURL)
        setFetch(true)
      }
     
      if (fetch) {

          axios.get(`http://localhost:3000/messages/${url}`, {
            params: {
              receveur: localStorage.getItem("id")
            }
          }).then(function (response) {
          setData(response.data)
          setFetch(false)
          setChange(false)
        })
      } 
    }, [data,ChangeURL,fetch, url, projet])


    const changeVariableProject = (urlName) => {
      axios.get(`http://localhost:3000/messages/section/${urlName}`).then(function (response) {
        setData(response.data)
      })  
      setChange(true)
    } 

    const showMail = (id) => {
      setShow(id)
      setTrigger(true)
    } 
    
    const mailOfSection = () => {
      const liste = []

      for (const message of data) {
        console.log(message)
        liste.push(
        <div onClick={() => showMail(message)}>
          <input type="checkbox" class="check" />
          <div class="sender-img">
            <div class="profil-img"></div>
            <div class="mail-notification"></div>
          </div>
          <p class="mail-title">{message.title}</p>
          <p class="mail-content">{message.content}
          </p>
        </div>
        )
      }

    return liste
    }


    const allMail = () => {

      const liste = []

      if (url !== "project") {
        let crop = ""
        for (const message of data) {
          if (message.content != undefined) {
            if (message.content.length > 100) {
              crop = message.content.substr(0, 100)+"..."
            }
            else{
              crop = message.content
            }
          }
        
          
          liste.push(
          <div className="message" onClick={() => showMail(message)}>
            <input type="checkbox" class="check" />
            <div class="sender-img">
              <div class="profil-img"></div>
              <div class="mail-notification"></div>
            </div>
            <p class="mail-title">{message.title}</p>
            <div><p class="mail-content">{crop}</p></div>
            
          </div>
          )
        }
      }
      else{
        for (const projet of data) {
          liste.push(
          <div>
            <p onClick={() => changeVariableProject(`${projet.name}`)} class="mail-title">{projet.name}</p>
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

        {change == false ? allMail() : mailOfSection() }
      
        
       
       <Show trigger={trigger} mail = { show } setTrigger= {setTrigger}>
          
        </Show>;
 

        </div>
      </div>
    </div>
  );
};

export default TabsMailView;
