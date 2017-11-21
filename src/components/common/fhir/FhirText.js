import React from 'react';
import PropTypes from 'prop-types';

//import { findExtension } from './extensions';
import TextAreaInput from '../htmlInput/TextAreaInput';

class FhirText extends React.Component {
  render() {
    const question = this.props.question;

    return (
      <TextAreaInput question={question} />
    );
  }
}

FhirText.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirText;
