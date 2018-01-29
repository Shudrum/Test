import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable max-len */

const StarFull = () => (
  <svg height="24" width="25">
    <polygon
      fill="#ffd055"
      points="12.5 19.7149167 4.77457514 23.7764129 6.25 15.1740259 1.22124533e-15 9.0817816 8.63728757 7.82671025 12.5 0 16.3627124 7.82671025 25 9.0817816 18.75 15.1740259 20.2254249 23.7764129"
    />
  </svg>
);

const StarEmpty = () => (
  <svg height="24" width="25">
    <polygon
      fill="#dddddd"
      points="12.5 19.7149167 4.77457514 23.7764129 6.25 15.1740259 1.22124533e-15 9.0817816 8.63728757 7.82671025 12.5 0 16.3627124 7.82671025 25 9.0817816 18.75 15.1740259 20.2254249 23.7764129"
    />
  </svg>
);

const StarSemi = () => (
  <svg height="24" width="25">
    <polygon
      fill="#ffd055"
      points="12.5 19.7149167 4.77457514 23.7764129 6.25 15.1740259 1.77635684e-15 9.0817816 8.63728757 7.82671025 12.5 0"
    />
    <polygon
      fill="#dddddd"
      points="12.5 19.7149167 12.5 0 16.3627124 7.82671025 25 9.0817816 18.75 15.1740259 20.2254249 23.7764129"
    />
  </svg>
);

const Rating = (props) => {
  const stars = [];
  for (let i = 1; i <= 10; i += 1) {
    if (i <= props.value) {
      stars.push(<StarFull key={i} />);
    } else if (i === Math.ceil(props.value)) {
      stars.push(<StarSemi key={i} />);
    } else {
      stars.push(<StarEmpty key={i} />);
    }
  }
  return <div>{stars} ({props.value})</div>;
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

Rating.StarFull = StarFull;
Rating.StarSemi = StarSemi;
Rating.StarEmpty = StarEmpty;

export default Rating;
