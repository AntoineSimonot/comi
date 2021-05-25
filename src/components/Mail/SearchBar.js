import React, { useEffect, useState } from "react";
import './SearchBar.scss'
import SendMail from "./SendEmail";


const SearchBar = () => {
  const [triggerSend, setTriggerSend] = useState (false)

  const showWrite = () => {
    setTriggerSend(true)
  } 


  return (
    <div>
      <form action="" className="searchbar-form">
        <input type="text" className="searchbar" placeholder="Rechercher" />
        <img src="./img/headApp/search-icon.png" alt="" className="searchbar-icon" />
      </form>
      <div className="add-message">
        <img src="./assets/svg/add.svg" alt="add icon" />
        <span onClick={() => showWrite()}>Ecrire un mail</span>
      </div>

      <SendMail triggerSend={triggerSend} setTriggerSend= {setTriggerSend}>
          
        </SendMail>;
    </div>

    
  );
};

export default SearchBar;
