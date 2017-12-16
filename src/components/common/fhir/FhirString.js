import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextInput from '../htmlInput/TextInput';
import HiddenInput from '../htmlInput/HiddenInput';
import { findExtension } from './extensions';

const mapStateToProps = state => ({
  ...state.questionnaire.errors
});

class FhirString extends React.Component {

  constructor() {
    super();

    // bind this
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  onAnswerChange(event) {
    event.target.value;
  }

  validate() {
    //this.props.question.required
    //this.props.question.maxLength
    //this.props.question.readOnly
  }

  render() {
    const question = this.props.question;

    const isHidden = findExtension(question.extension, "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden").valueBoolean;
    return (isHidden ?
      <HiddenInput question={question} /> :
      <TextInput question={question} type="text" onAnswerChange={this.onAnswerChange} onBlur={this.validate} errors />
    );
  }
}

FhirString.propTypes = {
  question: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(FhirString);
