import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Dashboard.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tables from '../Tables/Tables';
import Waiter from '../Waiter/Waiter';


const Dashboard = () =>	{  
  const ordersHeader = 'List of today\'s orders:';
  const tablesHeader = 'List of today\'s events and reservations:';


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={styles.header} variant="h5">
            {ordersHeader}
          </Typography>
        </Toolbar>
      </AppBar>
      <Waiter />
      <div className={styles.tables}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={styles.header} variant="h5">
              {tablesHeader}
            </Typography>
          </Toolbar>
        </AppBar>
        <Tables />
      </div>
    </>
  );
};

export default Dashboard;
