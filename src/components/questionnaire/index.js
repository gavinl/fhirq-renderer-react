
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionnaireList from './QuestionnaireList';

const mapStateToProps = state => ({
  ...state.routing
});

class QuestionnairePage extends React.Component {

  render() {
    console.log(this.props.match.params);
    return (
      <div>
        <QuestionnaireList />
      </div>
    );
  }
}

QuestionnairePage.propTypes = {
  match: PropTypes.object
};

export default connect(mapStateToProps)(QuestionnairePage);
