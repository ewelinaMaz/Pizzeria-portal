import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import styles from './NewEvents.module.scss';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import { CardActions } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 420,
  },
}));

const NewEvents = () => {
  const classes = useStyles;

  let today = new Date();
  let currentDate = today.toISOString().slice(0,10);
  const[selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [values, setValues] = useState({
    table: '',
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const demoStarters = ['water', 'snacks', 'cheese'];

  const [checked, setChecked] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const [time, setTime] = React.useState('');

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleCheckboxChange = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  return (
    <div className={styles.component}>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Card className={styles.component}>
          <CardHeader 
            title = 'New event'
          />
          <Divider/>
          <CardContent>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={3} xs={12}>
                <TextField
                  label='Table Number'
                  name='table'
                  onChange={handleChange}
                  required
                  select
                  value={values.table}
                  variant='outlined'
                  fullWidth
                >
                  {[1, 2, 3, 4, 5, 6].map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={2} xs={12}>
                <form className={classes.container} noValidate>
                  <TextField
                    id="time"
                    label="Pick hour"
                    type="time"
                    defaultValue="12:30"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 1800, // 30 min
                    }}
                  />
                </form>
              </Grid>
              <Grid item md={3} xs={12}>
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
              </Grid>    
            </Grid>
            <Divider 
              variant="middle"/>
            <Grid 
              className={styles.component}
              container
              justify="space-between"
              alignItems="center">
              <FormGroup
                className={styles.component}>
                <div>
                  <InputLabel id="demo-simple-select-label">Starters:</InputLabel>
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.checkedA}
                        onChange={handleCheckboxChange('checkedA')}
                        value={demoStarters[0]}
                        color="primary"
                      />
                    }
                    label={demoStarters[0]}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.checkedB}
                        onChange={handleCheckboxChange('checkedB')}
                        value={demoStarters[1]}
                        color="primary"
                      />
                    }
                    label={demoStarters[1]}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.checkedC}
                        onChange={handleCheckboxChange('checkedC')}
                        value={demoStarters[2]}
                        color="primary"
                      />
                    }
                    label={demoStarters[2]}
                  />
                </div>
              </FormGroup>
              <FormControl 
                className={classes.formControl}>
                <InputLabel 
                  id="demo-simple-select-label">Frequency</InputLabel>
                <Select
                  className={styles.component}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={time}
                  onChange={handleTimeChange}
                >
                  <MenuItem value={10}>once a week</MenuItem>
                  <MenuItem value={20}>once in two weeks</MenuItem>
                  <MenuItem value={30}>once in month</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid container 
                spacing={1} 
                item lg={5}
                alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Name" />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
               Submit
              </Button>
             
            </Grid>        
          </CardActions>
        </Card>
      </Grid>
    </div>
  );


};

export default NewEvents;
