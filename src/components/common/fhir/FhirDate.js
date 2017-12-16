import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../htmlInput/TextInput';

class FhirDate extends React.Component {

  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.validate = this.onChange.bind(this);
  }

  onChange(event) {
    event;
  }

  validate(event) {
    event;
  }

  render() {
    const question = this.props.question;

    return (
      <TextInput question={question} type="date" onChange={this.onChange} onBlur={this.onBlur} />
    );
  }
}

FhirDate.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirDate;
