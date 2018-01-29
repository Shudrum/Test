import PropTypes from 'prop-types';
import React from 'react';
import Label from 'ui/Label';

const Weekend = props => (
  <div className="col-md-11 offset-md-1 mt-4">
    <div className="row">
      <div className="col-md-12">
        <h5>{props.details.label}</h5>
      </div>
      <div className="col-md-6">
        <img
          alt={props.details.label}
          src={props.details.imageUrl}
          className="img-fluid"
        />
      </div>
      <div className="col-md-6">
        {props.details.topTheme && props.details.topTheme.map(theme => (
          <Label key={theme}>{theme}</Label>
        ))}
      </div>
    </div>
  </div>
);

Weekend.propTypes = {
  details: PropTypes.shape({
    label: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    topTheme: PropTypes.array,
  }).isRequired,
};

export default Weekend;
