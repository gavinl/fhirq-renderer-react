import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import AsyncActive from './AsyncActive';

const Header = ({ isLoading }) => {
  const activeStyle = { color: 'blue' };
  return (
    <div>
      <nav>
        <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
        {" | "}
        <NavLink to="/server" activeStyle={activeStyle}>Server Information</NavLink>
      </nav>

      {isLoading && <AsyncActive />}
    </div>
  );
};

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Header;
