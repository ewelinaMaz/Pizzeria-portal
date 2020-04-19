import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const PageNav = (props) => (
  <nav>
    <NavLink exact to = {`${process.env.PUBLIC_URL}/`} active className='active'>Home</NavLink>
    <NavLink to = {`${process.env.PUBLIC_URL}/login`} active className='active'>Login</NavLink>
    <NavLink to = {`${process.env.PUBLIC_URL}/tables`} active className='active'>Tables</NavLink>
    <NavLink to = {`${process.env.PUBLIC_URL}/waiter`} active className='active'>Waiter</NavLink>
    <NavLink to = {`${process.env.PUBLIC_URL}/kitchen`} active className='active'>Kitchen</NavLink>
  </nav>
);

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
