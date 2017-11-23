import React from 'react';
import PropTypes from 'prop-types';

const TextAreaInput = ({ question }) => {
  return (
    <div className="form-group">
      <label htmlFor={question.linkId}>{question.text}</label>
      <textarea id={question.linkId} required={question.required} className="form-control" />
    </div>
  );
};

// TODO: prop-types shape
TextAreaInput.propTypes = {
  question: PropTypes.object.isRequired
};

export default TextAreaInput;
