import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CheckboxInput from '../htmlInput/CheckboxInput';
import Item from './Item';
import { QUESTIONNAIRE_SET_ANSWER } from '../../../actions/questionnaireActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setAnswer: answer => dispatch({ type: QUESTIONNAIRE_SET_ANSWER, action: { linkId: ownProps.question.linkId, answer } })
  };
};

class FhirBoolean extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
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
          <CheckboxInput question={question} onChange={this.toggle} />
          <Item item={question.item} />
        </div>
      );
    }

    return (
      <CheckboxInput question={question} onChange={this.toggle} />
    );
  }
}

FhirBoolean.propTypes = {
  question: PropTypes.object.isRequired,
  setAnswer: PropTypes.func
};


export default connect(null, mapDispatchToProps)(FhirBoolean);
