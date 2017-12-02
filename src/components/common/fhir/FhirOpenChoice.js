import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../htmlInput/TextInput';

class OpenChoice extends React.Component {
  render() {
    const question = this.props.question;
    return (
      <TextInput question={question} />
    );
  }
}

OpenChoice.propTypes = {
  question: PropTypes.object.isRequired
};
export default OpenChoice;
