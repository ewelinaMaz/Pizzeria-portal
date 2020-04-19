import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Dashboard from './components/views/Dashboard/Dashboard';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import NewBooking from './components/views/NewBooking/NewBooking';
import Booking from './components/views/Booking/Booking';
import NewEvents from './components/views/NewEvents/NewEvents';
import Events from './components/views/Events/Events';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
            <Route exact path = {`${process.env.PUBLIC_URL}/`} component = {Dashboard} />
            <Route exact path = {process.env.PUBLIC_URL + '/login'} component = {Login} />
            <Route path = {`${process.env.PUBLIC_URL}/tables`} component = {Tables} />
            <Route path = {`${process.env.PUBLIC_URL}/waiter`} component = {Waiter} />
            <Route path = {`${process.env.PUBLIC_URL}/kitchen`} component = {Kitchen} />
            <Route path = {`${process.env.PUBLIC_URL}/tables/booking/new`} component = {NewBooking}/>  
            <Route path = {`${process.env.PUBLIC_URL}/tables/booking/123`} component = {Booking}/>
            <Route path = {`${process.env.PUBLIC_URL}/tables/events/new`} component = {NewEvents}/>  
            <Route path = {`${process.env.PUBLIC_URL}/tables/events/123`} component = {Events}/>
            <Route path = {`${process.env.PUBLIC_URL}/waiter/order/new`} component = {NewOrder}/>  
            <Route path = {`${process.env.PUBLIC_URL}/waiter/order/123`} component = {Order}/>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
