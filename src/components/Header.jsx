
import React from "react";
import PropTypes from "prop-types";
import pnLogo from "../assets/pn-logo.png";


const Header = ({ batchName }) => {
  return (
    <header id="header">
      <img src={pnLogo} alt="PN Logo" />
      <h1>Students results for {batchName}</h1>
    </header>
  );
};

Header.propTypes = {
  batchName: PropTypes.string.isRequired,
};

export default Header;
