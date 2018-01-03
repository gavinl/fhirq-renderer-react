import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../htmlInput/TextInput';
import { getInitialValue } from './extensions';

class FhirInteger extends React.Component {
  render() {
    const question = this.props.question;
    const initialValue = getInitialValue(question);

    return (
      <TextInput question={question} type="number" initialValue={initialValue} />
    );
  }
}

FhirInteger.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirInteger;
