import React from 'react';
import PropTypes from 'prop-types';
import { getFhirValue } from '../fhir/extensions';

const TextInput = ({ question, type }) => {
  const answer = question.answer;
  return (
    <div className="form-group">
      <label htmlFor={question.linkId}>{question.text}</label>
      <input type={type} id={question.linkId} required={question.required} className="form-control" value={getFhirValue(answer)} />
    </div>
  );
};

// TODO: prop-types shape
TextInput.propTypes = {
  question: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default TextInput;
