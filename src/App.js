import React from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import "./styles/Nav.css";

import Nav from './components/Nav';
import Search from './components/Search';
import ArticlesPage from './components/ArticlesPage';


class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <Nav/>
          <div className='container'>
            <h3>Top Stories:</h3>
            <Search />
          </div>
          <div className='container'>
            <ArticlesPage />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
