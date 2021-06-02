import React from 'react';
import HomePage from './HomePage';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            input: '',
            articles: [],
            // redirect: null,
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
            // articles: [...this.state.articles]
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const searchUrl = `http://hn.algolia.com/api/v1/search?query=`;
        const input = this.state.input;
        const queryString = `${searchUrl+input}`;

        fetch(searchUrl+input)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                articles: data.hits,
                // redirect: '/searchresults'
            })
        })
        this.resetInput()
        this.props.history.push(`/searchresults/${queryString}`)
    };

    render() {
        console.log(this.state);
        const { articles, redirect } = this.state.articles;

        // if(redirect) {
        //     return <Redirect to={redirect} />
        // }
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
                    {/* { articles ? <SearchResults /> : <HomePage /> } */}
                </form>
                
            </div>
        )
    }
}

export default withRouter(Search);

// {articles ? <Redirect to={{
//     pathname: '/searchresults',
//     state: {articles: this.state.results }
// }} /> : <HomePage /> }