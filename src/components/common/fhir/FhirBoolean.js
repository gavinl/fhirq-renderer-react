import React from 'react';
import PropTypes from 'prop-types';

//import { findExtension } from './extensions';
import CheckboxInput from '../htmlInput/CheckboxInput';
import Item from './Item';

class FhirBoolean extends React.Component {
  constructor(props) {
    super(props);
  }

  inputChanged(event) {
    this.props.setAnswer(this.props.question.linkId, event.target.checked);
  }
  render() {
    const question = this.props.question;

    if (question.repeats) {
      console.log("question repeats", question); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
    }

    if (question.item) {
      return (
        <div>
          <CheckboxInput question={question} onChange={event => this.inputChanged(event)} />
          <Item item={question.item} />
        </div>
      );
    }

    return (
      <CheckboxInput question={question} onChange={event => this.inputChanged(event)} />
    );
  }
}

FhirBoolean.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirBoolean;
