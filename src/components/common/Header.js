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
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavLink className="navbar-brand" to="/">FHIR Renderer</NavLink>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><NavLink activeClassName="active" className="navbar-brand" to="/">Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/questionnaire">Questionnaires</NavLink></li>
              <li><NavLink activeClassName="active" to="/server">Server Information</NavLink></li>
              <li><NavLink activeClassName="active" to="/output">State output</NavLink></li>
            </ul>
          </div>
        </div>
        {this.props.isLoading && <AsyncActive />}
      </nav>
    );
  }
}

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Header);
