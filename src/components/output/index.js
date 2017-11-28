import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.questionnaire
});

class OutputPage extends React.Component {
  render() {
    return (
      <div>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </div>
    );
  }
}

export default connect(mapStateToProps)(OutputPage);
