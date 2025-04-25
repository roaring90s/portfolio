import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false); // Fecha o menu ao clicar em um link
    };

    return (
        <>
            <div className="navbar">
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    
            <div className={`sidebar ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
                    <li><Link to="/education" onClick={handleLinkClick}>Education</Link></li>
                    <li><Link to="/resume" onClick={handleLinkClick}>Resume</Link></li>
                    <li><Link to="/about" onClick={handleLinkClick}>About Me</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
