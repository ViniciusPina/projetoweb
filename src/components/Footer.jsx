import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Sakura</p>
                <p>Todos os direitos reservados</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com">
                    <FaFacebook className="social-icon" />
                </a>
                <a href="https://www.twitter.com">
                    <FaTwitter className="social-icon" />
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram className="social-icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;