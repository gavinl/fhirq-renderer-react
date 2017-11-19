
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from '../../actions/questionnaireActions';
import agent from '../../agent';

const mapStateToProps = state => ({
  ...state.routing,
  ...state.questionnaire
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: types.QUESTIONNAIRE_LOADED, payload })
});

class QuestionnairePage extends React.Component {

  componentWillMount() {
    const id = this.props.match.params["id"];
    this.props.onLoad(agent.Questionnaire.byId(id));
  }

  render() {
    const id = this.props.match.params["id"];

    return (
      <div>
        <h1>{id}</h1>
      </div>
    );
  }
}

QuestionnairePage.propTypes = {
  onLoad: PropTypes.func,
  match: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnairePage);
