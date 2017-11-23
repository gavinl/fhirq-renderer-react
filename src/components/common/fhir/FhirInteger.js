import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../htmlInput/TextInput';

class FhirString extends React.Component {
  render() {
    const question = this.props.question;

    return (
      <TextInput question={question} type="number" />
    );
  }
}

FhirString.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirString;
