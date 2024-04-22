import React from 'react'
import "./article.css"
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    if (!article) {
        return (
            <div>
                <h2>Article Not Found</h2>
                {/* You can display a message or redirect to another page */}
            </div>
        );
    }
    return (
        <div className="Article">
            <img src={article.image ? article.image : ''} className='article-img' alt="" />
            <div className="blog-tag" >
                {article.category}
            </div>
            <div className="blog-preview">
                <h5 className='preview-title'>{article.title}</h5>
                <p className="preview-desc">{article.preview}</p>
            </div>
            <Link to={`/article/${article.id}`} className="view-more"> {/* Use Link for navigation */}
                Read more
            </Link>
        </div>
    )
}

export default Article