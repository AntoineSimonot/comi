import React, { useEffect, useState } from "react";
import "./Show.scss";
const axios = require('axios').default;

const Show = (props) => {
    let { mail, trigger } = props
    const [email, setEmail] = useState ()
    const [photo, setPhoto] = useState ()
    
    useEffect(() => {
        axios.get(`http://localhost:3000/user/${mail.sender}`).then(function (response) {
            setEmail(response.data.data[0].email)
            setPhoto(response.data.data[0].photo)
            console.log(response)
        })
      }, email)

     
      
    if (trigger == true) {
        return (
            <div className="show">
                <div>
                    <ul>
                        <div>
                        <img onClick={() => props.setTrigger(false)} src="./img/mail/back.png" alt="" srcset=""/>
                        </div>
                        <div>
                            <img src="./img/mail/bin.png" alt="" srcset=""/>
                            <img src="./img/mail/move.png" alt="" srcset=""/>
                            <img src="./img/mail/print.png" alt="" srcset=""/>
                            <img src="./img/mail/read.png" alt="" srcset=""/>
                            <img src="./img/mail/arch.png" alt="" srcset=""/>
                        </div>
                    </ul>
                </div>
                <div id="title">
                    <div>
                     < img src={photo}></img>
                    </div>
                    <div>
                        <div>
                            <h1>{mail.title} (Objet du mail)</h1>
                            <ul>
                                <img src="./img/mail/repn.png" alt="" srcset=""/>
                                <img src="./img/mail/start.png" alt="" srcset=""/>
                                <img src="./img/mail/option.png" alt="" srcset=""/>
                            </ul>
                        </div>
                        <div id="text">
                            <p>{email}</p>
                            <p>{mail.content}</p>
                        </div>
                        <div>
                            <div>
                                <img src="./img/mail/tranb.png" alt="" srcset=""/>
                                <p>Répondre</p>
                            </div>
                            <div>
                                <img src="./img/mail/repb.png" alt="" srcset=""/>  
                                <p>Transférer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
       
    }
    else{
        return null
    }
};

export default Show;