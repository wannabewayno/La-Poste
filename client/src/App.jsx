import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {

  const { isLoggedIn, color:{ main, dark } } = useSelector(state => state)

  return (
    <Router>
          <Header
            text='La Poste'
            color={main}
            textColor={dark}
          />
          <Switch>
            <Route exact path={["/", "/signin"]}>
              <Signin/>
            </Route>
            <PrivateRoute exact path='/dashboard' component={Dashboard} isLoggedIn={isLoggedIn}/>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  )
}

export default App;
