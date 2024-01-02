import React from "react";
import PropTypes from "prop-types";

// here we learn about props
export default function Navbar(props) {
  return (
    <nav
      className={`Navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <a className="navbar-brand mx-2" href="#">
        Expert
        </a>


          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mx-2" aria-current="page" href="#">
                {props.title}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                {props.about}
              </a>
            </li>
          </ul>
          <form className="d-flex mx-2 my-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>


          {/* switch */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              text="light"
              onClick={props.toggelmode}
            />
            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} htmlFor="flexSwitchCheckDefault`}>
              Change Mode
            </label>
          </div>


        </div>

        
      </div>
    </nav>
  );
}
Navbar.protoType = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  about: "About",
};
