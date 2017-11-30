import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../htmlInput/TextInput';
import HiddenInput from '../htmlInput/HiddenInput';

import { findExtension } from './extensions';

class FhirString extends React.Component {
  render() {
    const question = this.props.question;

    const hiddenExt = findExtension(question.extension, "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden");
    if (hiddenExt.valueBoolean) {
      return (
        <HiddenInput question={question} />
      );
    }

    return (
      <TextInput question={question} type="text" />
    );
  }
}

FhirString.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirString;
