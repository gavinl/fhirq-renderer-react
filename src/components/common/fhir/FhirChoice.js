import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectInput from '../htmlInput/SelectInput';

import { findExtension } from './extensions';

const mapStateToProps = state => ({
  ...state.questionnaire.current
});

class FhirChoice extends React.Component {
  render() {
    const question = this.props.question;
    let options = null;
    if (question.options) {
      let reference = question.options.reference;
      if (reference.startsWith("#")) {
        const codeSystem = this.props.contained.find(item => `#${item.id}` === reference);
        options = codeSystem.concept;
      }
    }

    if (question.repeats) {
      console.log("question repeats", question);
      debugger;
    }

    if (findExtension(question.extension, "http://standards.healthconnex.com.au/fhir/StructureDefinition/Questionnaire-hcx-combobox").valueBoolean) {
      return (
        <SelectInput question={question} options={options || []} />
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
  question: PropTypes.object.isRequired,
  contained: PropTypes.array
};

export default connect(mapStateToProps)(FhirChoice);
