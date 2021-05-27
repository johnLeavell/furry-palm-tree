import React from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';


import Search from './components/Search';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
      <Search />
          <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/searchresults' component={SearchResults} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
