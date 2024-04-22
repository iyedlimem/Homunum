import React from 'react';
import Article from '../Article/Article';
import './blogSection.css';

const LastArticles = ({ articles }) => {
    const lastThreeArticles = articles.slice(-3);
    return (
        <div className="articles-wrapper">
            {lastThreeArticles.map((article) => (
                <Article
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    )
}

export default LastArticles