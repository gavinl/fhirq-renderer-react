/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './HomePage';
import ServerPage from './server';

const mapStateToProps = state => ({
  ...state.async
});

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header isLoading={this.props.ajaxCallsInProgress > 0} />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/server" component={ServerPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  ajaxCallsInProgress: PropTypes.number
};

export default connect(mapStateToProps)(App);
