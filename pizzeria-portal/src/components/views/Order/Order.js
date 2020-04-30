import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import styles from './Order.module.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import NavigationIcon from '@material-ui/icons/Navigation';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 800,
    padding: 2,
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    height: 200,
  },
}));

const menu = [
  { id: 1, dish: 'pizza', options: ['pepper,', 'onion', 'olives'] },
  { id: 2, dish: 'coffee', options: ['latte'] },
  { id: 3, dish: 'salad', options: ['yellow cheese', 'goat cheese', 'tomato', 'cucumber', 'olives'] },
];

const Order = () => {
  const classes = useStyles;

  const [values, setValues] = useState({
    table: '',
    order: [],
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  
  return (
    <Grid container spacing={4}>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <Card className={classes.root}>
          <CardHeader 
            title = 'Order number123'/>
          <Divider/>  
          <CardContent 
            className={classes.content}>
            <div className={classes.inner}>
              <form autoComplete='on' noValidate className={classes.form}>
                <Grid container spacing={2} alignItems='center'>
                  <Grid item md={4} xs={12}>
                    <TextField
                      label='Table Number'
                      name='table'
                      onChange={handleChange}
                      required
                      select
                      value={values.table}
                      defaultValue='1'
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
                  <Table>
                    <TableBody>
                      {menu.map(row => (
                        <TableRow 
                          hover
                          key={row.id} 
                          className={styles.tableRow}>
                          <TableCell>
                            <Typography 
                              variant="h6">
                              {row.dish}
                            </Typography>
                          </TableCell>
                          {row.options.map(option => (
                            <TableCell
                              key={option}>{option}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </form>
            </div>
          </CardContent>
          <Divider/>
          <CardActions>
            <Grid
              className={classes.button}
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
              <Fab variant="extended">
                <NavigationIcon />
                Receipt
              </Fab>
            
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Order;

