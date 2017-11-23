import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ question, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={question.linkId}>{question.text}</label>
      <input type={type} id={question.linkId} required={question.required} className="form-control" />
    </div>
  );
};

// TODO: prop-types shape
TextInput.propTypes = {
  question: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default TextInput;
