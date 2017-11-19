import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/serverActions';
import agent from '../../agent';

const mapStateToProps = state => ({
  ...state.server
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: actions.SERVER_PAGE_LOADED, payload })
});

class ServerPage extends React.Component {

  componentWillMount() {
    this.props.onLoad(agent.Conformance.metadata());
  }

  render() {
    const conformance = this.props.conformance;
    if (conformance) {
      return (
        <div>
          <h1>{conformance.implementation.description}</h1>
          <h3>FHIR ver. {conformance.fhirVersion}</h3>

          <pre>
            {JSON.stringify(conformance, undefined, 2)}
          </pre>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

ServerPage.propTypes = {
  onLoad: PropTypes.func,
  conformance: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerPage);
