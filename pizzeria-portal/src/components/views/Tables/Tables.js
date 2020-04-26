import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import styles from './Tables.module.scss';

const Tables = () => {
  const Hours = [];
  const halfHour = ['00', '30'];
  for (let i=12; i<24; i++) {
    for(let j=0; j<2; j++) {
      Hours.push(('0' + i).slice(-2) + ':' + halfHour[j]);  
    }
  }

  let today = new Date();
  let currentDate = today.toISOString().slice(0,10);
  const[selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={8} md={12} xl={9} xs={12}>
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
                  {Hours.map(row => (
                    <TableRow hover key={row}>
                      <TableCell>{row}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>

        </Card>
      </Grid>
    </Grid>
      
  );
};


export default Tables;
