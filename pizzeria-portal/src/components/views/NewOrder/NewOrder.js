import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import styles from './NewOrder.module.scss';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';


const NewOrder = () => {

  const[values, setValues] = useState({
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
        <Card className={styles.root}>
          <CardHeader 
            title = 'Tables'
            action = {
              <form className={styles.input_container} noValidate>
                <TextField
                  id="table.value"
                  select
                  label="Table"
                  value={values.table}
                  onChange={handleChange}
                >
                  {[1,2,3,4,5,6].map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </form>
            }
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewOrder;
