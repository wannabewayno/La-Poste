import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
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
  // const [ isAuthenticated, setIsAuthenticaed ] = useState(false);


  useBackgroundImageRouter(backgroundImageMap);

  useEffect(() => {
    console.log('isLoggedIn?:',isLoggedIn);
    if(isLoggedIn);
    // setIsAuthenticaed(true); 
  },[isLoggedIn])

  // useEffect(() => {
  //   if(isAuthenticated) window.location = '/dashboard'
  // },[isAuthenticated])

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
            {/* <PrivateRoute exact path='/dashboard' component={Dashboard} isLoggedIn={isLoggedIn}/> */}
            <Route exact path='/dashboard'>
              {isLoggedIn? (
                <Dashboard isLoggedIn={isLoggedIn}/>
              ):(
                <Redirect to='/signin'/>
              )}
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  )
}

export default App;
