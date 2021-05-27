import React, { useEffect, useState } from "react";
import HeadApp from "../components/HeadApp";
// import MailView from "../components/Mail/ListeItemView";
import TabsMailView from "../components/Mail/TabsMailView";
import Sidebar from "../components/Sidebar";
import "./MailStyle/Mail.scss";
const Mail = (props) => {

  const [trigger, setTrigger] = useState (true)
  const [url, setUrl] = useState ([])
  
  const changeVariable = (urlName) => {
    setUrl(urlName);
  } 


  return (
    <div className="Mail-Page">
      <HeadApp>
        <span onClick={() => changeVariable("unread")}> Non lu(s)</span>
        <span onClick={() => changeVariable("read")}>   Email lu(s)</span>
        <span onClick={() => changeVariable("project")}> Projet</span>
        <span onClick={() => changeVariable("bin")}>    Corbeille</span>
      </HeadApp>
      <TabsMailView ChangeURL = { url } />
      <sendEmail trigger={trigger} setTrigger= {setTrigger}></sendEmail>
    </div>
  );
};


export default Mail;
