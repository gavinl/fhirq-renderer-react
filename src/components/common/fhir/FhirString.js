import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import HiddenInput from './HiddenInput';

const findExtension = (extension, url) => {
  return (Array.isArray(extension) && extension.find(ext => ext.url === url)) || {};
};

class FhirString extends React.Component {
  render() {
    const question = this.props.question;

    if (findExtension(question.extension, "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden").valueBoolean) {
      return (
        <HiddenInput question={question} />
      );
    }

    return (
      <TextInput question={question} />
    );
  }
}

FhirString.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirString;
