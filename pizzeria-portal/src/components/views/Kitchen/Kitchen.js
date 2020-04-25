import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const demoContent = [
  {id: '1', order: ['pizza salami'], status: 'done'},
  {id: '2', order: ['toskana salad', 'coffee'], status: 'in preparation'},
  {id: '3', order: ['pizza carbonarra', 'coffee'], status: 'in preparation'},
];

function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  // eslint-disable-next-line no-unused-vars
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
}
const Kitchen = (state) => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={SwitchLabels.handleChange} name='prepared' />}
                label="Prepared"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
