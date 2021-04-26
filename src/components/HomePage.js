import React, { useState, useEffect } from 'react'

const FRONTPAGEURL = `http://hn.algolia.com/api/v1/search?tags=front_page
`;

const HomePage = () => {
    const [articles, setArticles] = useState([])
  
    useEffect(()=> {
        fetch(FRONTPAGEURL)
        .then(resp => resp.json())
        .then(articleData => {
        setArticles(articleData.hits);
        });
    },[]);
    
    console.log(articles);

    return (
        <div>
            <h3>Top Stories:</h3>
            {articles.map( (article) => {
                return(
                    <li key={article.objectID}>
                    <div>Title : {article.title}</div>
                    <div>Points: {article.points}</div>
                    <div>Author: {article.author}</div>
                    <div>Created At: {article.created_at}</div>
                    <div>{article.num_comments} Comments </div>
                    <div>{article.url}</div>
                </li>
                )
            })}
        </div>
    )
}

export default HomePage;