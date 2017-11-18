
import React from 'react';
import { connect } from 'react-redux';
import QuestionnaireList from './QuestionnaireList';

const mapStateToProps = state => ({
  ...state.routing
});

class QuestionnairePage extends React.Component {
  render() {
    debugger;
    return (
      <div>
        <QuestionnaireList />

      </div>
    );
  }
}

export default connect(mapStateToProps)(QuestionnairePage);
