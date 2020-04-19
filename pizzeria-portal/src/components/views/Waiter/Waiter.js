import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';


const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter views</h2>
    <div>
      <Link exact to = {`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New Order</Link>
    </div>
    <div>
      <Link to = {`${process.env.PUBLIC_URL}/waiter/order/123`} activeClassName='active'>Order id</Link>
    </div>
  </div>
);

Waiter.propTypes = {

};

export default Waiter;
