import React, { Suspense, lazy } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));
const FourOFour = lazy(() => import('./FourOFour'));

const Routes = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Switch>
          <UnauthenticatedRoutes />
        </Switch>
      </Suspense>
    </>
  )
}

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/dashboard">
      <Dashboard />
    </Route>
    <Route path="*">
      <FourOFour />
    </Route>
  </Switch>
);

export default Routes;