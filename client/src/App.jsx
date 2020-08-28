import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { useBackgroundImageRouter } from 'grass-roots-react';
import { backgroundImageMap } from './content'

function App() {

  useBackgroundImageRouter(backgroundImageMap);

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
            <Route exact path='/dashboard'>
              <Dashboard/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  )
}

export default App;