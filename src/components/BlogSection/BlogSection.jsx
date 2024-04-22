import React from 'react';
import './blogSection.css';
import LastArticles from './LastArticles';
import { Link } from 'react-router-dom';

const BlogSection = ({ articles }) => {
    // Slice the articles to get the last 3 articles
    const lastThreeArticles = articles.slice(-3);

    return (
        <section className="blog-section">
            <div className="section-tag">
                Notre Blog
            </div>
            <h2 className="about-title">
                Découvrez des idées et de l'inspiration
            </h2>
            <p>
                Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.
            </p>

            <LastArticles articles={articles} />

            <div className="about-buttons">
                <Link className='blog-button view-more-button ' to={"/Simulator"} >
                    Commencez maintenant
                </Link>
                <Link className='blog-button more-button ' to={"/Blog"} >
                    savoir plus {'>'}
                </Link>

            </div>
        </section>
    );
};

export default BlogSection;
