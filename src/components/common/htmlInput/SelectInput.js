import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ question, options }) => {
  const opts = options.map(o => <option key={o.code} value={o.code}>{o.display}</option>);
  return (
    <div className="form-group">
      <label htmlFor={question.linkId}>{question.text}</label>
      <select id={question.linkId} className="form-control">
        {opts}
      </select>
    </div>
  );
};

// TODO: prop-types shape
SelectInput.propTypes = {
  question: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectInput;
