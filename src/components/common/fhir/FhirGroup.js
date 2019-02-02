import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { isEnabled } from './itemUtils';

import Item from './Item';

const Group = ({ group, root }) => {

  if (group.enableWhen && isEnabled(group, root)) {
    return <div />;
  }

  return (
    <Panel bsStyle="default">
      <Panel.Heading>
        <h3>
          {group.text}
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
  display: PropTypes.bool,
  root: PropTypes.array.isRequired
};

export default Group;
