import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById, fetchArticles } from '../hooks/blog';
import Header from '../components/header/Header';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import BlogSection from '../components/BlogSection/BlogSection';
import LastArticles from '../components/BlogSection/LastArticles';

const ArticleFull = () => {
    const { id } = useParams();

    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch the article by ID using the hook
        fetchArticleById(id)
            .then((data) => {
                setArticle(data);
                console.log(article)// Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error('Error fetching article by ID:', error);// Set loading to false in case of error
            });
        fetchArticles()
            .then((data) => {
                // Set the fetched data to the 'articles' state
                setArticles(data);
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
            });
    }, [id]);

    if (!article) {
        return <div>Article not found.</div>; // Handle the case where the article is not found
    }

    console.log(article);

    return (


        <div>
            <Header />

            <div className="home-wrapper blog-wrapper">

                <div className="fullarticle-content">
                    <div className="blog-tag" >
                        {article.category}
                    </div>
                    <h2>{article.title}</h2>
                    <img src={article.image} alt="" className='fullarticle-img' />
                    <div className="fullarticle-text-container">
                        {article.content.map((paragraph, index) => (
                            <div key={index}>
                                {paragraph.content.startsWith('####') ? (
                                    <h4 style={{ textAlign: "left" }}>{paragraph.content.replace('####', '')}</h4>
                                ) : (
                                    <p>{paragraph.content}</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="line-devider" />
                <div className="more-articles-wrapper">

                    <div className="more-article-header">
                        <h2 className='about-title' style={{color:"#7F56D9"}} >
                            la savoir continue son voyage
                        </h2>
                        <p className='offres-desc'>
                            Découvrez d'autres articles fascinants sur ce sujet et bien d'autres encore, qui n'attendent que vous pour être explorés.
                        </p>
                    </div>

                    <LastArticles articles={articles} />
                </div>

                <Contact />
            </div>

            <Footer />
        </div>
    );
};

export default ArticleFull;
