import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CheckboxInput from '../htmlInput/CheckboxInput';
import Item from './Item';
import { QUESTIONNAIRE_SET_ANSWER } from '../../../actions/questionnaireActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setAnswer: answer => {
      const action = {
        linkId: ownProps.question.linkId,
        answer: answer
      };
      debugger;
      dispatch({ type: QUESTIONNAIRE_SET_ANSWER, action: action });
    }
  };
};

class FhirBoolean extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const answer = { fhirBoolean: event.target.checked };
    const question = this.props.question;
    this.props.setAnswer(question.linkId, answer);
  }

  render() {
    const question = this.props.question;

    if (question.repeats) {
      console.log("question repeats", JSON.stringify(question)); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }

    if (question.item) {
      return (
        <div>
          <CheckboxInput question={question} onChange={this.onChange} />
          <Item item={question.item} />
        </div>
      );
    }

    return (
      <CheckboxInput question={question} onChange={this.onChange} />
    );
  }
}

FhirBoolean.propTypes = {
  question: PropTypes.object.isRequired,
  setAnswer: PropTypes.func
};


export default connect(null, mapDispatchToProps)(FhirBoolean);
