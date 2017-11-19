import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as types from '../../actions/questionnaireActions';
import agent from '../../agent';

import SearchSetEntry from './SearchSetEntry';

const mapStateToProps = state => ({
  ...state.questionnaire
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: types.QUESTIONNAIRE_LIST_LOADED, payload })
});

class QuestionList extends React.Component {

  componentWillMount() {
    this.props.onLoad(agent.Questionnaire.all());
  }

  render() {
    if (this.props.questionnaireList) {
      const entries = this.props.questionnaireList.entry.map(entry => <SearchSetEntry key={entry.fullUrl} entry={entry} />);

      return (
        <div>
          {entries}
        </div>
      );
    }

    return (<div />);
  }
}

QuestionList.propTypes = {
  onLoad: PropTypes.func,
  questionnaireList: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
