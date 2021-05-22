import React from 'react';

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            input: '',
            articles: []
        }
    }

    handleInput = e => {
        this.setState({
            input: e.target.value})
    };

    handleSearch = () => {
        this.handleSubmit(this.state.input);
    }

    resetInput = () => {
        this.setState({
            input: '',
            articles: [...this.state.articles]
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        let searchUrl = `http://hn.algolia.com/api/v1/search?query=`;
        let input = this.state.input;

        fetch(searchUrl+input)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                articles: data.hits
            })
        })
        this.resetInput()
    };

    render() {
        console.log(this.state);
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for Articles By Title</label>
                    <br />
                    <input 
                    type='text'
                    value={this.state.input}
                    placeholder='Search'
                    name='articleInput'
                    onChange={this.handleInput}
                    />
                    <button onClick={this.handleSubmit}>Search</button>
                </form>
            </div>
        )
    }
}

export default Search;