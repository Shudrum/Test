import PropTypes from 'prop-types';
import React from 'react';
import Hotel from 'widget/Hotel';

const HotelList = props => ((
  <div className="row">
    {props.list.map(hotel => <Hotel key={hotel.id} hotel={hotel} />)}
  </div>
));

HotelList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HotelList;
