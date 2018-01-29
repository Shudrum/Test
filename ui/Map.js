import PropTypes from 'prop-types';
import React from 'react';

const Map = props => (
  <iframe
    title={props.label}
    width="100%"
    height="250"
    className="border-0 mt-3"
    src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDYCiWnUKwJY3HjZRmh5waQEXWbasUpQD0&center=${props.location.latitude},${props.location.longitude}&zoom=16`}
  />
);

Map.propTypes = {
  label: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default Map;
// export default () => (null);
