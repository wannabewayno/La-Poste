import React from 'react';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
          <Header
            text='La Poste'
            color='white'
          />
          <Switch>
            <Route exact path={["/", "/dashboard"]}>
              <Dashboard/>
            </Route>
            <Route exact path='/signin'>
              <Signin/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
    </Router>
  )
}

export default App;
