import React from "react";
import './HeadApp.scss'


const HeadApp = ({children, onOptionClick}) => {


  return (
    <div class="head">
      <img src="/img/headApp/option-icon.png" alt="" onClick={(e) => onOptionClick()} />
			{children}
    </div>
  );
};

export default HeadApp;
