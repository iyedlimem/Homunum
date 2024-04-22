import React from 'react'
import "./contact.css"
import { useRef, useState } from "react";
import submitNewsletter from '../../api/ContactApi';

const Contact = () => {

    const emailInputRef = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef(null);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        const email = emailInputRef.current?.value;

        if (email) {
            const isNewsletterSubmitted = await submitNewsletter({ email });

            if (isNewsletterSubmitted) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 2000);
                form.current?.reset();
            }
        }

    };

    return (
        <section className="contact-section">
            <div className="contact-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.8331 27.0871V39.6819C52.8331 41.3844 52.1412 42.9281 51.0269 44.0424C49.9126 45.1567 48.3689 45.8486 46.6665 45.8486H9.33316C7.6307 45.8486 6.08698 45.1567 4.97267 44.0424C3.85837 42.9281 3.1665 41.3844 3.1665 39.6819V16.3486C3.1665 14.6387 3.86444 13.0889 4.9873 11.9735C6.10047 10.8678 7.63818 10.1819 9.33316 10.1819H35.928C35.5474 11.1317 35.2756 12.1369 35.1281 13.1819H9.33316C9.06638 13.1819 8.80752 13.2148 8.56028 13.2767L27.4462 30.1829L27.4475 30.1841C27.7627 30.463 28.2364 30.4632 28.5517 30.1844L28.5534 30.1829L37.2779 22.3687C37.8469 23.1967 38.5093 23.9555 39.2499 24.6299L37.1477 26.5127L49.7319 40.4806C49.798 40.2256 49.8331 39.958 49.8331 39.6819V27.887C50.8782 27.7395 51.8833 27.4677 52.8331 27.0871ZM34.913 28.5143L47.6788 42.6837C47.3611 42.7908 47.0208 42.8486 46.6665 42.8486H9.33316C9.01578 42.8486 8.70962 42.8022 8.42086 42.7156L21.8957 29.2407L25.4491 32.4216L25.4531 32.4251C26.9055 33.7161 29.0941 33.7161 30.5465 32.4251L30.5507 32.4214L34.913 28.5143ZM19.6571 27.2367L6.29954 40.5942C6.21293 40.3055 6.1665 39.9993 6.1665 39.6819V16.3486C6.1665 15.9862 6.22704 15.6384 6.33882 15.3145L19.6571 27.2367Z" fill="white" />
                    <path d="M48 23.5151C52.6944 23.5151 56.5 19.7096 56.5 15.0151C56.5 10.3207 52.6944 6.51514 48 6.51514C43.3056 6.51514 39.5 10.3207 39.5 15.0151C39.5 19.7096 43.3056 23.5151 48 23.5151Z" fill="#7F56D9" stroke="white" stroke-width="3" />
                </svg>
                <div className="contact-Cta">
                    <h4 className="contact-header">
                        Parlons de Votre Avenir.
                    </h4>
                    <p className="contact-description">
                        Stay in the loop with updates from our team and community. Once a month.
                    </p>
                </div>
                <div className="contact-form">

                    <div className="contact-input" >
                        {isSubmitted ? (<div style={{ color: "070B3B" }}> {t('footer.succ')}</div>) : (<form onSubmit={handleNewsletterSubmit} className='newsletter_form' ref={form}>
                            <input type="email" placeholder='Ecrivez votre email' className='mail-input' ref={emailInputRef} />
                            <button type="submit" className='mail-submit' >
                                S'inscrire à la newsletter
                            </button>
                        </form>)}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact