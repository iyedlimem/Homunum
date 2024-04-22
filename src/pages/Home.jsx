import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Offre from '../components/Offre/Offre'
import Testimonials from '../components/Testimonials/Testimonials'
import BlogSection from '../components/BlogSection/BlogSection'
import FAQ from '../components/Faq/FAQ'
import { fetchArticles } from '../hooks/blog'

const Home = () => {
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
    return (
        <div>
            <Header />

            <div className="home-wrapper">
                <Hero />
                <About />
                <Services />
                <Offre />
                <Testimonials />
                <BlogSection articles={articles} />
                <FAQ />
                <Contact />
            </div>

            <Footer />
        </div>
    )
}

export default Home