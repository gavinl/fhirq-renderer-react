import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/aboutServerActions';

const mapStateToProps = state => ({
  ...state.conformance
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: actions.ABOUT_SERVER_PAGE_LOADED, payload })
});

export class AboutServerPage extends React.Component {

  render() {
    return (
      <div>
        <h1>About Server</h1>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutServerPage);
