
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SearchSetEntry = ({ entry }) => {
  const resource = entry.resource;
  return (
    <div className="panel panel-default">
      <div className="panel-title">{resource.id}</div>
      <div className="panel-body">

        <NavLink exact to={`/questionnaire/${resource.id}`}>
          {resource.id}
        </NavLink>
      </div>
      <div className="panel-footer">{resource.status}</div>
    </div>
  );
};

SearchSetEntry.propTypes = {
  entry: PropTypes.object.isRequired
};

export default SearchSetEntry;
