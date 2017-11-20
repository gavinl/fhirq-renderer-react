import React from 'react';
import PropTypes from 'prop-types';

import Group from './Group';

class Item extends React.Component {
  render() {
    if (!this.props.item) return <div />;

    const items = this.props.item.map(item => {
      //console.log(item);
      switch (item.type) {
        case "group":
          return <Group group={item} />;
      }
      // default
      return <div key={item.linkId}>{item.linkId} {item.type}</div>;
    });

    return (
      <div>
        {items}
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.array
};

export default Item;
