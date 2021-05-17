import React from "react";
import './SearchBar.scss'
const SearchBar = () => {
  return (
    <div>
      <form action="" className="searchbar-form">
        <input type="text" className="searchbar" placeholder="Rechercher" />
        <img src="./img/headApp/search-icon.png" alt="" className="searchbar-icon" />
      </form>
      <div className="add-message">
        <img src="./assets/svg/add.svg" alt="add icon" />
        <span>Ecrire un mail</span>
      </div>
    </div>
  );
};

export default SearchBar;
