import React from 'react';
import PropTypes from 'prop-types';

const HiddenInput = ({ question }) => {
  return (
    <input type="hidden" id={question.linkId} value={question.initialString} />
  );
};

// TODO: prop-types shape
HiddenInput.propTypes = {
  question: PropTypes.object.isRequired
};

export default HiddenInput;
