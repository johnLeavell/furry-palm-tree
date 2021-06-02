import React from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Search from './components/Search';
import HomePage from './components/HomePage';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav />
        <Search />
          <Switch>
            <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
