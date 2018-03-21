import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ question, type, onChange, onBlur }) => {
  return (
    <div className={`form-group${question.required && " required"}`}>
      <label htmlFor={question.linkId}>{question.text}</label>
      <input type={type} id={question.linkId} required={question.required}
        className="form-control"
        readOnly={question.readOnly}
        onChange={onChange}
        onBlur={onBlur} />
    </div>
  );
};

// TODO: prop-types shape
TextInput.propTypes = {
  question: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default TextInput;
