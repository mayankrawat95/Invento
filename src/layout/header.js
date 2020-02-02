import React from "react";
import Logo from "../assets/logo/logo.svg";

function headerComponent() {
  return (
    <header className="header">
      <div className="container">
        <img src={Logo} alt="logo with text" />

        <input placeholder="Search something" />

        <div className="form__group">
          <button className="btn white">Sign In</button>

          <button className="btn green">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default headerComponent;
