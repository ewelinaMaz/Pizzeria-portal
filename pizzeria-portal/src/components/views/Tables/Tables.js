import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables views</h2>
    <ul>
      <li>
        <Link exact to = {`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>booking new</Link>
      </li>
      <li>
        <Link to = {`${process.env.PUBLIC_URL}/tables/booking/123`} activeClassName='active'>booking 123</Link>
      </li>
      <li>
        <Link to = {`${process.env.PUBLIC_URL}/tables/events/123`} activeClassName='active'>event 123</Link>
      </li>
      <li>
        <Link to = {`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>event new</Link>
      </li>
    </ul>
  </div>
);

Tables.propTypes = {
};

export default Tables;
