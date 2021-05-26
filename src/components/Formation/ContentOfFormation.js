import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ContentOfFormation.scss";
import marked from 'marked'
const ContentOfFormation = (props) => {
  let { setTrigger, title , id , type} = props;

  const [content, setContent] = useState('')



  useEffect(() => {
    fetch(`http://localhost:3000/markdown?file=${id}`).then((res) =>{
      if (!res.ok) {
        console.log('Not Found')
      }
      res.text().then((text) => setContent(text))
    })
  },[])


  console.log(type);

  // console.log(content);

  return (
    <div className="contentOfFormation-Body">
      <div className="title">
        <img
          onClick={() => props.setTrigger(false)}
          src="./img/mail/back.png"
          alt=""
        />
        <p>{title}</p>
      </div>

      {
        type != 'quizz' ? 
        (
          <div className="bodyContent">
            <div className="contentFormation" data-type={type}>
              <div dangerouslySetInnerHTML={{__html: marked(content)}}/>
              <button>Je valide la formation</button>
            </div>
          </div>
        ):null
      }
      
    </div>
  );
};

export default ContentOfFormation;
