import React from "react";
import Logo from "../../img/favicon.png";
const Nav = () => {
  return (
    <header id="header">
      <div class="container">
        <img src={Logo} alt="logo" class="logo" />
        <div class="flex items-center">
          <a class="text-white min-w-[50px] font-medium" href="/">
            Home
          </a>
          <button class="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
