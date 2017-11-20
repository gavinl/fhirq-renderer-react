import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import Item from './Item';

const Group = ({ group }) => {
  return (
    <Panel header={group.text} bsStyle="default">
      <Item item={group.item} />
    </Panel >
  );
};

Group.propTypes = {
  group: PropTypes.object.isRequired
};

export default Group;
