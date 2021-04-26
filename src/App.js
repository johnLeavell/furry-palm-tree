import React from 'react';
import HomePage from './components/HomePage';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


const App = () => {
  return (

    <BrowserRouter>
      <div className="App">
        <Search />
        <Switch>
          <Route path='/' component={HomePage} />
          <Route path='/results' component={ResultsList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
