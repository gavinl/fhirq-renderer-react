import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectInput from '../htmlInput/SelectInput';
import * as types from '../../../actions/questionnaireActions';
import agent from '../../../agent';

import { findExtension, isExternal } from './extensions';

const mapStateToProps = state => ({
  valueSets: state.questionnaire.valueSets
});

const mapDispatchToProps = dispatch => ({
  getExternalValueSet: payload =>
    dispatch({ type: types.FETCH_EXTERNAL_VALUE_SET, payload })
});

class FhirChoice extends React.Component {

  componentWillMount() {
    let reference = this.props.question.options.reference;
    if (isExternal(reference)) {
      this.props.getExternalValueSet(agent.ValueSet.external(reference));
    }
  }

  render() {
    const question = this.props.question;
    let options = null;
    if (question.options) {
      let reference = question.options.reference;
      let valueSets = this.props.valueSets || [];
      const codeSystem = valueSets.find(item => item.id === reference);
      if (codeSystem)
        options = codeSystem.concept;
    }

    if (question.repeats) {
      console.log("this question repeats", question);
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
  valueSets: PropTypes.array,
  getExternalValueSet: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FhirChoice);
