import React, { useEffect, useState } from "react";
import './sendEmail.scss'
const axios = require('axios').default;


const SendEmail = (props) => {

  let { triggerSend, setTriggerSend } = props
  const [receiver, setReceiver] = React.useState("");
  const [projet, setProjet] = React.useState("");
  const [content, setContent] = React.useState("");
 
  let send = (event) => {
    event.preventDefault()
    console.log(receiver, localStorage.getItem("email"))
    axios({
      method: 'post',
      url: 'http://localhost:3000/messages',
      data: {
        title: projet,
        content: content,
        read: 0,
        projet: "Dev",
        sender: localStorage.getItem("email"),
        email: receiver
      }
    }).then((response) => {
      props.setTriggerSend(false)
     
    }, (error) => {
      console.log(error);
    });
};


  if (triggerSend == true) {
    return (
        <div class = "sendEmail">
          <form onSubmit={send}>
          <img onClick={() => props.setTriggerSend(false)} src="./img/mail/bin.png" alt="" srcset=""/>
          <div>
            <div>
              <p>A</p>
              <input
              name="receiver"
              type="text"
              value={receiver}
              onChange={e => setReceiver(e.target.value)}
              required />
              <p>CC/Cci</p>
            </div>
            <div>
              <p>Projet</p>
              <input
              name="projet"
              type="text"
              value={projet}
              onChange={e => setProjet(e.target.value)}
              required />
            </div>
            <div>
              <textarea  name="content"
              type="text"
              value={content}
              onChange={e => setContent(e.target.value)}
              required  cols="30" rows="10" placeholder="Ecrire"></textarea>
            </div>
            <div>
              <button>Envoyer</button>
              <img src="./img/mail/bin.png" alt="" srcset=""/>
              <img src="./img/mail/bin.png" alt="" srcset=""/>
              <img src="./img/mail/bin.png" alt="" srcset=""/>
            </div>
          </div>

          </form>
         
        </div>
      );
    }
    else{
        return null
    }
  }
  
  {/* <span onClick={() => props.setTriggerSend(false)}>Ecrire un mail</span> */}


export default SendEmail;
