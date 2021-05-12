import React, { useEffect, useState } from "react";
import HeadApp from "../components/HeadApp";
import MailView from "../components/Mail/ListeItemView";
import TabsMailView from "../components/Mail/TabsMailView";
import Sidebar from "../components/Sidebar";
import "./Mail.scss";
const Mail = () => {


  const [fetch, setFetch] = useState (true)
  const [url, setUrl] = useState ([])

  const changeVariable = (urlName) => {
    setUrl(urlName);
    setFetch(true);
  } 


  return (
    <div className="Mail-Page">
      <HeadApp>
        <span onClick={() => changeVariable("unread")}>Non lu(s)</span>
        <span onClick={() => changeVariable("read")}>Email lu(s)</span>
        <span onClick={() => changeVariable("projet")}>Projet</span>
        <span onClick={ () => changeVariable("legend")}>Légende</span>
        <span onClick={ () => changeVariable("bin")}>Corbeille</span>
      </HeadApp>
      <MailView />
      <TabsMailView functionChangeVariable = { changeVariable } />
    </div>
  );
};


export default Mail;
