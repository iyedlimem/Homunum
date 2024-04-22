import React from 'react';
import "./header.css";
import logo from "/logo.png";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <header className='header'>
            <nav className='nav'>
                <a href="/" >
                    <img src={logo} width={120} alt="homeunum-logo" />
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu "}>
                    <ul className='nav__list'>
                        <li className='nav__item h6'>
                            <Link className='nav__item h6 ' to={"/Guide"} >
                                Portage Salarial
                            </Link>

                        </li>
                        <li className='nav__item h6' >
                            {/* <a className='nav__item h6' href="#services">
                                Services
                            </a> */}
                            Services
                        </li>
                        <li className='nav__item h6'>
                            <Link className='nav__item h6 ' to={"/Blog"} >
                                Blog
                            </Link>
                        </li>
                        <li className='nav__item h6'>
                            <Link className='nav__item h6 ' to={"/Simulator"} >
                                Simulateur
                            </Link>
                        </li>
                    </ul>
                    <button className='button'> Contact Us </button>
                </div>


                <button className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <DensityMediumIcon className='icon'></DensityMediumIcon>
                </button>
            </nav>
        </header>
    )
}

export default Header