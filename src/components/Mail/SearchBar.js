import React from "react";
import './SearchBar.scss'
const SearchBar = () => {
  return (
    <div>
      <form action="" class="searchbar-form">
        <input type="text" class="searchbar" placeholder="Rechercher" />
        <img src="./img/headApp/search-icon.png" alt="" class="searchbar-icon" />
      </form>
      <div class="add-message">
        <img src="./assets/svg/add.svg" alt="add icon" />
        <span>Ecrire un mail</span>
      </div>
    </div>
  );
};

export default SearchBar;
