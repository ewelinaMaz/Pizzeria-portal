import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

const Booking = ({match}) => (
  <div className={styles.component}>
    <h2>Order views</h2>
    <span>{match.params.id}</span>
  </div>
);

Booking.propTypes = {
  match: PropTypes.shape({
    params:PropTypes.shape({
      id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default Booking;
