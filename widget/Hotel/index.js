import PropTypes from 'prop-types';
import React from 'react';
import Map from 'ui/Map';
import Rating from 'ui/Rating';
import Weekend from './Weekend';

const Hotel = props => (
  <div className="col-md-12">
    <div className="row">
      <div className="col-md-12">
        <h3>{props.hotel.label}</h3>
        <Rating value={props.hotel.review.average} />
        <Map location={props.hotel.location} label={props.hotel.label} />
      </div>
    </div>
    <div className="row">
      {props.hotel.weekend.map(weekend => (
        <Weekend
          key={weekend.id}
          details={weekend}
        />
      ))}
    </div>
    <hr className="mb-5 mt-5" />
  </div>
);

Hotel.propTypes = {
  hotel: PropTypes.shape({
    label: PropTypes.string,
    review: PropTypes.object,
    location: PropTypes.object,
    weekend: PropTypes.array,
  }).isRequired,
};

export default Hotel;
