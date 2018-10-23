
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Panel, Glyphicon } from 'react-bootstrap';
import moment from 'moment';

const SearchSetEntry = ({ entry }) => {
  const resource = entry.resource;
  const lastUpdated = moment(resource.meta.lastUpdated);
  const created = moment(resource.date);
  return (
    <Panel bsStyle="default">
      <Panel.Heading>
        <div className="questionnaire-status-container">
          <div className={resource.status}>{resource.status}</div>
        </div>
        <h3>
          <NavLink exact to={`/questionnaire/${resource.id}`}>
            {resource.title || "No Title"}
            &nbsp;<Glyphicon glyph="edit" />
          </NavLink>
        </h3>
      </Panel.Heading>
      <Panel.Body>
        Created {created.format('LLL')}<br />
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
