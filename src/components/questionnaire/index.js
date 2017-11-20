
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from '../../actions/questionnaireActions';
import agent from '../../agent';

import Item from '../common/fhir/Item';

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
    const q = this.props.current;

    if (!q) return <div />;
    return (
      <div>
        <h1>{q.title}</h1>
        <Item item={q.item} />
      </div>
    );
  }
}

QuestionnairePage.propTypes = {
  onLoad: PropTypes.func,
  match: PropTypes.object,
  current: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnairePage);
