import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ question }) => {
  return (
    <div className="form-group">
      <label htmlFor={question.linkId}>{question.text}</label>
      <input type="text" id={question.linkId} className="form-control" />
    </div>
  );
};

// TODO: prop-types shape
TextInput.propTypes = {
  question: PropTypes.object.isRequired
};

export default TextInput;
