import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="nav-container">
      <div className="logo">
        <i className="fab fa-instagram" />
        <p>Instagram</p>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={event => props.handleSearchBar(event)}
        />
        <i className="fas fa-search" />
      </div>
      <div className="icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
}

export default SearchBar;
