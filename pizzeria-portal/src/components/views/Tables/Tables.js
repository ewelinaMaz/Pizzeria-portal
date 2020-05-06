import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import styles from './Tables.module.scss';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EventIcon from '@material-ui/icons/Event';

const demoContent = [
  {
    hour: '13:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: 1, status: 'event' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
  {
    hour: '14:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'free' },
      { id: 4, status: 'event' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
];
const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <div className={styles.center}>
          <div>
            <div>
              <LockOpenIcon fontSize="large" />
            </div>
          </div>
          <div className={styles.center}>
            <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
              New Booking
            </Button>
          </div>
          <div className={styles.center}>
            <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/events/new`}>
              New Event
            </Button>
          </div>
        </div>
      );
    case 'booked':
      return (
        <div className={styles.center}>
          <div>
            <LockIcon fontSize="large" />
          </div>
          <div>
            <Button component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/tables/booking/123abc`}>
              Booked
            </Button>
          </div>
        </div>
      );
    case 'event':
      return (
        <div className={styles.center}>
          <div>
            <EventIcon fontSize="large" />
          </div>
          <div>
            <Button component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/tables/events/123abc`}>
              Event
            </Button>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Tables = () => {

  let today = new Date();
  let currentDate = today.toISOString().slice(0,10);
  const[selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Card className={styles.component}>
      <CardHeader 
        title = 'Tables'
        action = {
          <form className={styles.input_container} noValidate>
            <TextField
              id='date'
              label='Date'
              type='date'
              defaultValue={selectedDate}
              onChange={handleDateChange}
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        }
      />
      <CardActions>
        <Button
          className={styles.button}
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}
          activeclassname='active'
        >New booking
        </Button>
        <Button
          className={styles.button}
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/events/new`}
          activeclassname='active'
        >New event
        </Button>
      </CardActions>
      <Divider/>
      <CardContent className={styles.content}>
        <div className={styles.inner}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                </TableCell>
                <TableCell>Table 1</TableCell>
                <TableCell>Table 2</TableCell>
                <TableCell>Table 3</TableCell>
                <TableCell>Table 4</TableCell>
                <TableCell>Table 5</TableCell>
                <TableCell>Table 6</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map(row => (
                <TableRow key={row.hour}>
                  <TableCell component="th" scope="row" className={styles.hour}>
                    {row.hour}
                  </TableCell>
                  {row.tables.map(table => (
                    <TableCell key={table.id}>{renderActions(table.status)}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

    </Card>
      
  );
};


export default Tables;