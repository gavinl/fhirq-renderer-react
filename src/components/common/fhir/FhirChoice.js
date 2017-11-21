import React from 'react';
import PropTypes from 'prop-types';

import { findExtension } from './extensions';

class FhirChoice extends React.Component {
  render() {
    const question = this.props.question;

    if (question.repeats) {
      console.log("question repeats", question);
      debugger;
    }

    if (findExtension(question.extension, "http://standards.healthconnex.com.au/fhir/StructureDefinition/Questionnaire-hcx-combobox").valueBoolean) {
      return (
        <div>
          combobox
        </div>
      );
    }

    return (
      <div>
        {question.linkId} radio
      </div>
    );
  }
}

FhirChoice.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirChoice;
