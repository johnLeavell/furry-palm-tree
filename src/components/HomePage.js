import React from 'react'

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        this.fetchData()
    };

    fetchData = () => {
        let frontPageUrl = `http://hn.algolia.com/api/v1/search?tags=front_page`;
        fetch(frontPageUrl)
        .then(resp => resp.json())
        .then(articles => {
            this.setState({
                articles: articles.hits,
                isLoaded: true
            })
        })
    }

    render() {
        const articles = this.state.articles;

        return (
             <div>
                {articles.map( (article) => {
                    return(
                        <li key={article.objectID}>
                        <div>Title: {article.title}</div>
                        <div>Points: {article.points}</div>
                        <div>Author: {article.author}</div>
                        <div>Created At: {article.created_at}</div>
                        <div>{article.num_comments} Comments </div>
                        <div>{article.url}</div>
                        <br/>
                    </li>
                    )
                })}
            </div>
        );
    }
}

export default HomePage;