import React from "react";
import { Link } from "react-router-dom";

function Navbar({ button, theme }) {
  return (
    <header>
      <nav>
        <Link to="/" className="title">
          Movie - Hub
        </Link>
        <input
          className="search-bar"
          type="search"
          placeholder="Search movie by title, actor or director"
        />
        <ul type="none">
          <li>
            <Link>Favorites</Link>
          </li>
        </ul>
        <button className="theme-btn" onClick={button}>
          {theme ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
