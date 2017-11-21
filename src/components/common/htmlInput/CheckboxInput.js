import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({ question }) => {
  console.log(question);
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" id={question.linkId} />
        {question.text}
      </label>
    </div>
  );
};

// TODO: prop-types shape
CheckboxInput.propTypes = {
  question: PropTypes.object.isRequired
};

export default CheckboxInput;
