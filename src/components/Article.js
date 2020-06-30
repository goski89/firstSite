import React from 'react';
import '../styles/Article.css'

function Article(props) {

    return (
        <article>
            <h3>{props.title}</h3>
            <span>{props.author}</span>
            <p>{props.text}</p>
        </article>
    );
}

export default Article;