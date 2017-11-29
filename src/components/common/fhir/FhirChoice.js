import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectInput from '../htmlInput/SelectInput';
import * as types from '../../../actions/questionnaireActions';
import agent from '../../../agent';

import { findExtension, isExternal } from './extensions';
import { findInlineOptions } from './contained';

const mapStateToProps = state => ({
  valueSets: state.questionnaire.valueSets
});

const mapDispatchToProps = dispatch => ({
  getExternalValueSet: payload =>
    dispatch({ type: types.FETCH_EXTERNAL_VALUE_SET, payload }),
  getRelativeValueSet: payload =>
    dispatch({ type: types.FETCH_RELATIVE_VALUE_SET, payload })
});

class FhirChoice extends React.Component {

  componentWillMount() {
    if (this.props.question.options) {
      const reference = this.props.question.options.reference;
      if (reference.startsWith("#")) return;
      if (isExternal(reference)) {
        this.props.getExternalValueSet(agent.ValueSet.external(reference));
      }
      else {
        this.props.getRelativeValueSet(agent.ValueSet.relative(reference));
      }
    }
  }

  render() {
    const question = this.props.question;
    const options = findInlineOptions(question, this.props.valueSets);

    if (question.repeats) {
      console.log("this question repeats", question); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }

    if (findExtension(question.extension, "http://standards.healthconnex.com.au/fhir/StructureDefinition/Questionnaire-hcx-combobox").valueBoolean) {
      return (
        <SelectInput question={question} options={options} />
      );
    }

    console.log(options); // eslint-disable-line no-console
    return (
      <div>
        {question.linkId} radio
      </div>
    );
  }
}

FhirChoice.propTypes = {
  question: PropTypes.object.isRequired,
  valueSets: PropTypes.array,
  getExternalValueSet: PropTypes.func,
  getRelativeValueSet: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FhirChoice);
