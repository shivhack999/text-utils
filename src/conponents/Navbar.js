import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar- ${ props.mode } bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`text-bold navbar-brand nav-link  text-${props.textColor}`} href="#">
            {props.title2}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link  text-${props.textColor}`} aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link  text-${props.textColor}`}  href="/DarkMode">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
              {/*<label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckChecked">Dark Mode</label>*/}
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title2: PropTypes.string.isRequired
};
Navbar.defaultProps={
    title2: 'this is default title'
}
