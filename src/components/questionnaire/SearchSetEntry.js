
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Panel, Glyphicon } from 'react-bootstrap';

const SearchSetEntry = ({ entry }) => {
  const resource = entry.resource;
  const title = (
    <h3>
      <NavLink exact to={`/questionnaire/${resource.id}`}>
        {resource.title || "Untitled"}
        &nbsp;<Glyphicon glyph="edit" />
      </NavLink>
    </h3>
  );
  return (
    <Panel header={title} bsStyle="default" footer={entry.fullUrl}>
      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: resource.text.div }} />
      {/* eslint-enable react/no-danger */}
    </Panel>
  );
};

SearchSetEntry.propTypes = {
  entry: PropTypes.object.isRequired
};

export default SearchSetEntry;
