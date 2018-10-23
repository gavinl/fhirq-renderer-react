import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import Item from './Item';

const Group = ({ group }) => {

  return (
    <Panel bsStyle="default">
      <Panel.Heading>
        <h3>
          {group.text} {group.enableWhen && `(${JSON.stringify(group.enableWhen)})`}
        </h3>

      </Panel.Heading>
      <Panel.Body>
        <Item item={group.item} />
      </Panel.Body>
    </Panel >
  );
};

Group.propTypes = {
  group: PropTypes.object.isRequired,
  display: PropTypes.bool
};

export default Group;
