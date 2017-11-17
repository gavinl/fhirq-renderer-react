import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './common/Header';

const mapStateToProps = state => ({
  ...state
});

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header isLoading={this.props.ajaxCallsInProgress > 0} />
      </div>
    );
  }
}

HomePage.propTypes = {
  ajaxCallsInProgress: PropTypes.number.isRequired
};

export default connect(mapStateToProps, () => ({}))(HomePage);
