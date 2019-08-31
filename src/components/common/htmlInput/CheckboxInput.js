import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({ question, onChange }) => {
  if (!onChange) onChange = () => { };
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" id={question.linkId} onChange={onChange} />
        {question.text}
      </label>
    </div>
  );
};

CheckboxInput.propTypes = {
  question: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default CheckboxInput;
