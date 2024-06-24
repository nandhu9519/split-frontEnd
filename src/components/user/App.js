import React from "react";
import "./App.css";
import Header from "./header/Header";

function App() {
  return (
    <>
    <Header />
    <div className="bannerDiv">
        <div className="leftBanner">
          <div className="bannerHeading">
            <h1>
              Less stress when sharing expenses <span id="spanText"></span>
            </h1>
          </div>
          <div className="para">
            <p>
              Keep track of your shared expenses and balances with housemates,
              trips, groups, friends, and family
            </p>
          </div>
          <div className="paraSignupDiv">
            <a className="signupButton">Sign up</a>
          </div>
        </div>
        <div className="rightBanner">
        </div>
    </div>
    </>
  );
}

export default App;
