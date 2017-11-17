import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IndexLink } from 'react-router-redux';

import AsyncActive from './AsyncActive';

const Header = ({ isLoading }) => {

  return (
    <div>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/about-server">About FHIR Server</Link>
      </nav>

      {isLoading && <AsyncActive />}
    </div>
  );
};

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Header;
