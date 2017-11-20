import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import AsyncActive from './AsyncActive';

const mapStateToProps = state => ({
  isLoading: state.async.ajaxCallsInProgress > 0
});

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            {/* <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
          </div> */}
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink className="navbar-brand" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/questionnaire">Questionnaires</NavLink>
              </li>
              <li>
                <NavLink to="/server">Server Information</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.isLoading && <AsyncActive />}
      </div>
    );
  }
}

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Header);
