import React from 'react'

const ListArticles = ({articles}) => {
    
    // const urlify = text => {
    //     const urlRegex = /(https?:\/\/[^\s]+)/g;
    //     return text.split(urlRegex)
    //        .map(part => {
    //           if(part.match(urlRegex)) {
    //              return <a href={part}>{part}</a>;
    //           }
    //           return part;
    //        });
    //   };

      console.log(articles);
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
    )
}

export default ListArticles;