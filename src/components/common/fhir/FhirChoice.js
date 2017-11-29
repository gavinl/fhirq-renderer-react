import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectInput from '../htmlInput/SelectInput';
import RadioInput from '../htmlInput/RadioInput';
import * as types from '../../../actions/questionnaireActions';
import agent from '../../../agent';

import { findExtension, isExternal, convertOptionToCoding } from './extensions';

const mapStateToProps = state => ({
  resourceBin: state.questionnaire.resourceBin
});

const mapDispatchToProps = dispatch => ({
  getResource: payload =>
    dispatch({ type: types.FETCH_RESOURCE, payload })
});

class FhirChoice extends React.Component {

  componentWillMount() {
    if (this.props.question.options) {
      const reference = this.props.question.options.reference;
      if (reference.startsWith("#")) { // inline
        // get inline valueSet
        // get codeSystem(s) from valueSet
      }
      if (isExternal(reference)) {
        this.props.getResource(agent.ValueSet.external(reference));
      }
      else {
        this.props.getResource(agent.ValueSet.relative(reference));
      }
    }
  }

  render() {
    const question = this.props.question;
    const options = question.option ? convertOptionToCoding(question.option) : findResource(question.options.reference, this.props.resourceBin);

    if (question.repeats) {
      console.log("this question repeats", question); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }

    if (findExtension(question.extension, "http://standards.healthconnex.com.au/fhir/StructureDefinition/Questionnaire-hcx-combobox").valueBoolean) {
      return (
        <SelectInput question={question} options={options} />
      );
    }

    return (
      <RadioInput question={question} options={options} />
    );
  }
}

FhirChoice.propTypes = {
  question: PropTypes.object.isRequired,
  resourceBin: PropTypes.array.isRequired,
  getResource: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FhirChoice);
