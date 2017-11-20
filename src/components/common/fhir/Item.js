import React from 'react';
import PropTypes from 'prop-types';

import Group from './Group';
import FhirString from './FhirString';

class Item extends React.Component {
  render() {
    if (!this.props.item) return <div />;

    const items = this.props.item.map(item => {
      let component = null;
      switch (item.type) {
        case "group":
          component = <Group key={item.linkId} group={item} />;
          break;

        case "string":
          component = <FhirString key={item.linkId} question={item} />;
          break;

        default:
          component = <div key={item.linkId}>{item.linkId} {item.type}</div>;
          break;
      }
      // default
      return component;
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
