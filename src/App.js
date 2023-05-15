import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BankiHome, DevHome, Landing } from './Containers';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route path="/banki">
                <BankiHome />
            </Route>
            <Route path="/dev">
                <DevHome />
            </Route>
          </Switch>
        </div>    
      </div>
    </Router>
  );
}

export default App;
