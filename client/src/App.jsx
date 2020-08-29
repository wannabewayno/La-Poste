import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import { useBackgroundImageRouter } from 'grass-roots-react';
import { backgroundImageMap } from './content'
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useBackgroundImageRouter(backgroundImageMap);

  useEffect(() => {
    console.log('isLoggedIn?:',isLoggedIn);
    if(isLoggedIn) window.location.pathname='dashboard';
  },[isLoggedIn])

  return (
    <Router>
          <Header
            text='La Poste'
            color='beige'
          />
          <Switch>
            <Route exact path={["/", "/signin"]}>
              <Signin/>
            </Route>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            {/* <Route exact path='/dashboard'>
              {isLoggedIn? (
                <Dashboard/>
              ):(
                <Redirect to='/signin'/>
              )}
            </Route> */}
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  )
}

export default App;
