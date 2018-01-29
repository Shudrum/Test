import PropTypes from 'prop-types';
import React from 'react';

const Label = props => (
  <h5>
    <span className="badge badge-info">{props.children}</span>
  </h5>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
