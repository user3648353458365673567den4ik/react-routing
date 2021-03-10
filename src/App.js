import React from 'react'
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} exact component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
