import React from 'react';
import PropTypes from 'prop-types';

//import { findExtension } from './extensions';
import CheckboxInput from '../htmlInput/CheckboxInput';
import Item from './Item';

class FhirBoolean extends React.Component {
  render() {
    const question = this.props.question;

    if (question.repeats) {
      console.log("question repeats", question); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }

    if(question.enableWhen) {
      debugger;
    }

    if (question.item) { // TODO: process enableWhen here
      return (
        <div>
          <CheckboxInput question={question} />
          <Item item={question.item} />
        </div>
      );
    }

    return (
      <CheckboxInput question={question} />
    );
  }
}

FhirBoolean.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirBoolean;
