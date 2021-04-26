import React, { useState } from 'react'
import ResultsList from './ResultsList';

const SEARCHSTORIES = `http://hn.algolia.com/api/v1/search?query=`

const Search = () => {
    const [input, setInput] = useState('');
    const [articles, setArticles] = useState([])

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch(SEARCHSTORIES+`${input}`)
        .then(resp => resp.json())
        .then(articleData => {
            setArticles(articleData.hits)
        })
    };
    
    console.log(articles)
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Search for Articles By Title</label>
            <br />
                <input 
                type='text'
                value={input}
                name='articleInput'
                onChange={handleChange}
                />
            </form>
            <ResultsList articles={articles} />
        </div>
    )
}

export default Search;