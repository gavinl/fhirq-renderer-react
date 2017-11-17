import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/serverActions';
import agent from '../../agent';

const mapPropsToState = state => ({
  ...state.server
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: actions.SERVER_PAGE_LOADED, payload })
});

export class ServerPage extends React.Component {

  componentWillMount() {
    this.props.onLoad(agent.Conformance.metadata());
  }

  render() {
    return (
      <div>
        <h1>Server Capability Statement</h1>
        <pre>
          {JSON.stringify(this.props.conformance, undefined, 2)}
        </pre>
      </div>
    );
  }
}

ServerPage.propTypes = {
  onLoad: PropTypes.func,
  conformance: PropTypes.object
};

export default connect(mapPropsToState, mapDispatchToProps)(ServerPage);
