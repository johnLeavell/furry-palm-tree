import React, { useState, useEffect } from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import "./styles/Nav.css";
import Nav from './components/Nav';
import ListArticles from './components/ListArticles';
import Search from './components/Search';

const FRONTPAGEURL = `http://hn.algolia.com/api/v1/search?tags=front_page`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(()=> {
    fetch(FRONTPAGEURL)
    .then(resp => resp.json())
    .then(articleData => {
    setArticles(articleData.hits);
    setLoading(false);
    });
  },[]);
  return (

    <BrowserRouter>
      <Nav/>
      <Search />
      <div className='container'>
        <h3>Top Stories:</h3>
        {<ListArticles articles={articles} />}
      </div>
    </BrowserRouter>
  );
}
export default App;
