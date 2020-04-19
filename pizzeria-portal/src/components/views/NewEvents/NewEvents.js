import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewEvents.module.scss';

const NewEvents = () => (
  <div className={styles.component}>
    <h2>New events views</h2>
  </div>
);

NewEvents.propTypes = {
  children: PropTypes.node,
};

export default NewEvents;
