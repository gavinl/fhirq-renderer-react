import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from '../../actions/questionnaireActions';
import agent from '../../agent';

const mapStateToProps = state => ({
  ...state.questionnaire
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: types.QUESTIONNAIRE_PAGE_LOADED, payload })
});

class QuestionList extends React.Component {

  componentWillMount() {
    this.props.onLoad(agent.Questionnaire.all());
  }

  render() {
    return (
      <div />
    );
  }
}

QuestionList.propTypes = {
  onLoad: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
