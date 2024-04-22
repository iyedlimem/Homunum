import React from 'react'
import "./footer.css"
import logo from "/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-content">
                <div className="line first" />
                <div className="footer-links">
                    <a href="/" >
                        <img src={logo} width={100} alt="homeunum-logo" />
                    </a>
                    <div className="footer-links_content">
                        <ul className='footer-nav__list'>
                            <li className='nav__item h6'>
                                Portage Salarial
                            </li>
                            <li className='nav__item h6'>
                                Services
                            </li>
                            <li className='nav__item h6'>
                                Blogs
                            </li>
                            <li className='nav__item h6'>
                                Simulateur
                            </li>
                            <li className='nav__item h6'>
                                Politique de confidentialité
                            </li>
                            <li className='nav__item h6'>
                                Mentions légales
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social-media">
                    <div className="line " />
                    <div className="footer-links">
                        <p className="nav__item h6">
                            © 2023 Homenum. All rights reserved.
                        </p>
                        <div className="footer-links_content">
                            <ul className='footer-social__list'>
                                <li className='nav__item h6'>
                                    <FacebookIcon/>
                                </li>
                                <li className='nav__item h6'>
                                    <TwitterIcon/>
                                </li>
                                <li className='nav__item h6'>
                                    <LinkedInIcon/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer