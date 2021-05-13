import React, { useState } from 'react'

const SEARCHSTORIES = `http://hn.algolia.com/api/v1/search?query=`

const Search = () => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    };

    const resetInput = () => {
        setInput("")
    }
    const handleSubmit = e => {
        e.preventDefault();
        fetch(SEARCHSTORIES+`${input}`)
        .then(resp => resp.json())
        .then(articleData => {
            // setArticles
            console.log(articleData.hits)
        })
        resetInput()
    };
    
    return (
        <div className='container'>
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
        </div>
    )
}

export default Search;