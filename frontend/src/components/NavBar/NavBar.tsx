import React from "react";
import { useHistory } from "react-router-dom";
import { ADDWORD_ROUTE, MAIN_ROUTE } from "../../utils/const";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <button onClick={() => history.push(MAIN_ROUTE)} className="brand-logo">
          Learn English
        </button>
        <button
          onClick={() => history.push(ADDWORD_ROUTE)}
          className="btn-floating btn-large waves-effect waves-light red addword-button"
        >
          <i className="material-icons">add</i>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
