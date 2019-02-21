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
    dispatch({ type: types.QUESTIONNAIRE_LIST_LOADED, payload }),
  filter: payload =>
    dispatch({ type: types.QUESTIONNAIRE_LIST_FILTER, payload })
});

class QuestionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.onLoad(agent.Questionnaire.all());
  }

  handleSubmit(event) {
    if (this.state.filter)
      this.props.filter(agent.Questionnaire.byTitle(this.state.filter));
    else agent.Questionnaire.all();
    event.preventDefault();

  }
  handleChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    if (this.props.questionnaireList) {
      const entries = this.props.questionnaireList.entry.map(entry => <SearchSetEntry key={entry.fullUrl} entry={entry} />);

      return (
        <div>
          <h1>Questionnaires</h1>
          {/* TODO: autocomplete */}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" onChange={this.handleChange} placeholder="Filter" />
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Apply</button>
            </div>
          </form>
          {entries}
        </div>
      );
    }

    return (<div />);
  }
}

QuestionList.propTypes = {
  onLoad: PropTypes.func,
  filter: PropTypes.func,
  questionnaireList: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
