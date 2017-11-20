
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

const SearchSetEntry = ({ entry }) => {
  const resource = entry.resource;
  const title = <h3>{resource.id}</h3>;
  return (
    <Panel header={title} bsStyle="default">
      <NavLink exact to={`/questionnaire/${resource.id}`}>
        {resource.id}
      </NavLink>
      <div>
        {resource.status}
      </div>
    </Panel>
  );
};

SearchSetEntry.propTypes = {
  entry: PropTypes.object.isRequired
};

export default SearchSetEntry;
