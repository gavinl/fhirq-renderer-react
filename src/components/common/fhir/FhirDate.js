import React from 'react';
import PropTypes from 'prop-types';


class FhirDate extends React.Component {

  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.validate = this.onChange.bind(this);
  }

  onChange(event) {
    event;
  }

  validate(event) {
    event;
  }

  render() {
    const question = this.props.question;

    return (
      <div className={`form-group${question.required && " required"}`}>
        <label htmlFor={question.linkId}>{question.text}</label>
        <div className="input-group">
          <input type="date" id={question.linkId} required={question.required}
            className="form-control"
            readOnly={question.readOnly}
            onChange={this.onChange}
            onBlur={this.onBlur} />
          <div className="input-group-addon">
            <span className="glyphicon glyphicon-calendar" />
          </div>
        </div>
      </div>
    );
  }
}

FhirDate.propTypes = {
  question: PropTypes.object.isRequired
};

export default FhirDate;
