import React from 'react';
import PropTypes from 'prop-types';

import FhirGroup from './FhirGroup';
import FhirString from './FhirString';
import FhirInteger from './FhirInteger';
import FhirChoice from './FhirChoice';
import FhirBoolean from './FhirBoolean';
import FhirText from './FhirText';

class Item extends React.Component {
  render() {
    if (!this.props.item) return <div />;

    const items = this.props.item.map(item => {
      let component = null;
      switch (item.type) {
        case "group":
          component = <FhirGroup key={item.linkId} group={item} />;
          break;

        case "integer":
          component = <FhirInteger key={item.linkId} question={item} />;
          break;

        case "string":
          component = <FhirString key={item.linkId} question={item} />;
          break;

        case "choice":
          component = <FhirChoice key={item.linkId} question={item} />;
          break;

        case "boolean":
          component = <FhirBoolean key={item.linkId} question={item} />;
          break;

        case "text":
          component = <FhirText key={item.linkId} question={item} />;
          break;

        default:
          console.log("unhandled type", item.type, item);
          component = <div key={item.linkId}>{item.linkId} {item.type}</div>;
          break;
      }

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
