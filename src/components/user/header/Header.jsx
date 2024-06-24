import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const location = useLocation();

  return (
    <div className="headerDiv">
      <div className="leftRow">
        <div className="logoDiv">
          <img
            height="50px"
            src="https://plates.splitwise.com/images/splitwise-logo-bordered.png"
          />
        </div>
        <div className="headerSubDiv">
          <p>Splitwise</p>
        </div>
      </div>
      <div className="righRow">
        <div className="loginDiv">
          <Link to={location.pathname === 'login' ? '' : '/login'} style={{ textDecoration: "none", color: 'inherit' }}>
            <p>Log in</p>
          </Link>
        </div>
        <div className="signupDiv">
          <Link to="signup" style={{ textDecoration: "none" }}>
            <a className="signupButton">Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
