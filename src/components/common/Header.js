import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import AsyncActive from './AsyncActive';

const mapStateToProps = state => ({
  ...state.async
});

class Header extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <nav>
          {this.props.isLoading && <AsyncActive />}
          <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
          {" | "}
          <NavLink to="/server" activeStyle={activeStyle}>Server Information</NavLink>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Header);
