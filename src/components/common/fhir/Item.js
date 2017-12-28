import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { findItem } from './itemUtils';

import FhirGroup from './FhirGroup';
import FhirString from './FhirString';
import FhirInteger from './FhirInteger';
import FhirChoice from './FhirChoice';
import FhirBoolean from './FhirBoolean';
import FhirText from './FhirText';
import FhirOpenChoice from './FhirOpenChoice';
import FhirDate from './FhirDate';

const mapStateToProps = state => ({
  root: state.questionnaire.current.item
});

class Item extends React.Component {
  render() {
    if (!this.props.item) return <div />;

    const items = this.props.item.map(item => {
      let display = false;
      switch (item.type) {
        case "group":
          if (item.enableWhen) {
            for (let i = 0; i < item.enableWhen.length; i++) {
              display = findItem(item.enableWhen[i].question, this.props.root);
            }
          }

          return <FhirGroup key={item.linkId} group={item} display={display} />;

        case "integer":
          return <FhirInteger key={item.linkId} question={item} />;

        case "string":
          return <FhirString key={item.linkId} question={item} />;

        case "choice":
          return <FhirChoice key={item.linkId} question={item} />;

        case "boolean":
          return <FhirBoolean key={item.linkId} question={item} />;

        case "text":
          return <FhirText key={item.linkId} question={item} />;

        case "open-choice":
          return <FhirOpenChoice key={item.linkId} question={item} />;

        case "date":
          return <FhirDate key={item.linkId} question={item} />;

        default:
          return <div key={item.linkId}>{item.linkId} {item.type}</div>;
      }
    });

    return (
      <div>
        {items}
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.array,
  root: PropTypes.array
};

export default connect(mapStateToProps)(Item);
