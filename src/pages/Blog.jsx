import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Article from '../components/Article/Article'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { fetchArticles } from '../hooks/blog'


const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Call the fetchArticles function to fetch data
        fetchArticles()
            .then((data) => {
                // Set the fetched data to the 'articles' state
                setArticles(data);
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
            });
    }, []);

    const HeaderArticle = articles.slice(-1);
    console.log(HeaderArticle)
    console.log(articles)
    return (
        <div>
            <Header />

            <div className="home-wrapper blog-wrapper" >
                <h2 className='about-title'>
                    Découvrez des idées et de l'inspiration
                </h2>
                <p className='offres-desc'>
                    Explorez notre blog captivant, rempli d'articles qui suscitent la réflexion et de contenus inspirants qui enflammeront votre créativité et élargiront vos connaissances.
                </p>
                <div className="Blog-hero">
                    {HeaderArticle.length === 0 ? (
                        <div>
                            <p>Loading .....</p>
                            {/* You can display a message or redirect to another page */}
                        </div>
                    ) : (
                        <div className="Blog-article">
                            <div className="first-article-content">
                                <div className="blog-tag">{HeaderArticle[0]?.category || 'No category'}</div>
                                <div className="blog-preview">
                                    <h5 className='preview-title'>{HeaderArticle[0]?.title || 'No title'}</h5>
                                    <p className="preview-desc"> {HeaderArticle[0]?.preview || 'No preview'} </p>
                                </div>
                                <a href="" className="view-more">
                                    Read more
                                </a>
                            </div>
                            <img src={HeaderArticle[0]?.image || ''} className='article-img-header' alt="" />
                        </div>
                    )}
                </div>
                <h4 className='blog-subtitle'>
                    Nos Articles recents
                </h4>
                <div className="Blog_articles-wrapper">


                    {articles.map((article) => (

                        <Article key={article.id} article={article} />

                    ))}

                </div>
                <Contact />
            </div>

            <Footer />
        </div>
    )
}

export default Blog