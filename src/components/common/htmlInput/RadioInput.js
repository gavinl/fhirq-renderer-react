import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ question, options }) => {

  return (
    <div>
      <fieldset>
        <legend>{question.text}</legend>
        {options.map(o => (
          <div className="radio" key={o.code}>
            <label>
              <input type="radio" name={question.linkId} id={o.code} value={o.code} />
              {o.display}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

// TODO: prop-types shape
RadioInput.propTypes = {
  question: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};

export default RadioInput;
