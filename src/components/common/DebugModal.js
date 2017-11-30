import React from 'react';
import PropTypes from 'prop-types';
//import {} from 'react-bootstrap';

const DebugModal = ({ show, lines = [] }) => {

  return (
    <div className={show || "hidden"}>
      <h1>Debug</h1>
      {lines.map((line, idx) => <div key={`line${idx}`}>{line}</div>)}
    </div>
  );
};

DebugModal.propTypes = {
  show: PropTypes.bool,
  lines: PropTypes.array
};

export default DebugModal;
