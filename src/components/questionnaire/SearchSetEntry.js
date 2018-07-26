
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Panel, Glyphicon } from 'react-bootstrap';
import moment from 'moment';

const SearchSetEntry = ({ entry }) => {
  const resource = entry.resource;
  const lastUpdated = moment(entry.resource.meta.lastUpdated);
  console.log(entry);
  return (
    <Panel bsStyle="default">
      <Panel.Heading>
        <h3>
          <NavLink exact to={`/questionnaire/${resource.id}`}>
            {resource.title || "Untitled"}
            &nbsp;<Glyphicon glyph="edit" />
          </NavLink>
          <span className={`questionnaire-status questionnaire-status-${resource.status}`}>{resource.status}</span>
        </h3>
      </Panel.Heading>
      <Panel.Body>
        {resource.date && `Created ${moment(resource.date).format('LLLL')}`}
        <br />
        {entry.fullUrl}
      </Panel.Body>
      <Panel.Footer>
        Version {resource.meta.versionId}, last updated {lastUpdated.format('LLL')} ({lastUpdated.fromNow()})
      </Panel.Footer>
    </Panel>
  );
};

SearchSetEntry.propTypes = {
  entry: PropTypes.object.isRequired
};

export default SearchSetEntry;
