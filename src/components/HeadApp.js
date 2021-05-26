import React from "react";
import './HeadApp.scss'


const HeadApp = ({children, onOptionClick}) => {


  return (
    <div className="head">
      <img src="/img/headApp/option-icon.png" alt=""  />
			{children}
    </div>
  );
};

export default HeadApp;
