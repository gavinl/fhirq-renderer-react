import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CheckboxInput from '../htmlInput/CheckboxInput';
import Item from './Item';
import * as types from '../../../actions/questionnaireActions';

const mapDispatchToProps = dispatch => {
  // eslint-disable-next-line no-unused-labels
  setAnswer: (linkId, answer) =>
    dispatch({ type: types.QUESTIONNAIRE_SET_ANSWER, action: { linkId, answer } });
};

class FhirBoolean extends React.Component {
  constructor(props) {
    super(props);
  }

  inputChanged(event) {
    const answer = { fhirBoolean: event.target.checked };
    this.props.setAnswer(this.props.question.linkId, answer);
  }
  render() {
    const question = this.props.question;

    if (question.repeats) {
      console.log("question repeats", question); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }

    if (question.item) {
      return (
        <div>
          <CheckboxInput question={question} onChange={event => this.inputChanged(event)} />
          <Item item={question.item} />
        </div>
      );
    }

    return (
      <CheckboxInput question={question} onChange={event => this.inputChanged(event)} />
    );
  }
}

FhirBoolean.propTypes = {
  question: PropTypes.object.isRequired,
  setAnswer: PropTypes.func.isRequired
};

export default connect(() => { }, mapDispatchToProps)(FhirBoolean);
