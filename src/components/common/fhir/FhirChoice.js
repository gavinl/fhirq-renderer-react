import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectInput from '../htmlInput/SelectInput';
import RadioInput from '../htmlInput/RadioInput';
import { FETCH_RESOURCE, FETCH_EXTERNAL_VALUE_SET } from '../../../actions/questionnaireActions';
import agent from '../../../agent';

import { resolveOptions, findExtension, isExternal, convertOptionToCoding } from './extensions';

const mapStateToProps = state => ({
  resourceBin: state.questionnaire.resourceBin
});

const mapDispatchToProps = dispatch => ({
  getResource: payload =>
    dispatch({ type: FETCH_RESOURCE, payload }),
  getExternalValueSet: payload =>
    dispatch({ type: FETCH_EXTERNAL_VALUE_SET, payload })
});


class FhirChoice extends React.Component {
  componentWillMount() {
    if (!this.props.question.options)
      return;

    const reference = this.props.question.options.reference;

    if (!reference)
      throw "Missing reference";
    if (!(typeof (reference) === "string"))
      throw "reference is not a string";

    if (reference.startsWith("#")) { // inline
      return;
    }

    if (isExternal(reference)) {
      this.props.getResource(agent.ValueSet.external(reference));
    }
    else {
      this.props.getResource(agent.ValueSet.relative(reference));
    }
  }


  render() {
    const question = this.props.question;
    const options = question.option ?
      convertOptionToCoding(question.option) :
      resolveOptions(question.options.reference, this.props.resourceBin);

    if (question.repeats) {
      console.log("this question repeats", question); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }

    return (
      findExtension(question.extension, "http://standards.healthconnex.com.au/fhir/StructureDefinition/Questionnaire-hcx-combobox").valueBoolean ?
        <SelectInput question={question} options={options} /> :
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
