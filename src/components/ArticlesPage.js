import React from 'react'

class ArticlesPage extends React.Component {
    state = {
        articles: []
    }

    componentDidMount(){
        let frontPageUrl = `http://hn.algolia.com/api/v1/search?tags=front_page`;
        fetch(frontPageUrl)
        .then(resp => resp.json())
        .then(articles => {
            this.setState({
                articles: articles.hits
            })
        })
    };


    render() {
        console.log(this.state);

        return (
            <div className='container'>
                <h3>ArticlesPage</h3>
                <br/>
            </div>
        )
    }
}

export default ArticlesPage
