import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-custom py-3 mt-auto shadow-sm bottom-0 start-0 end-0 z-3 footer-fixed-md">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 text-center text-md-start">
                {/* Made by */}
                <p className="mb-0 fs-6">Made by Deep Delvadiya</p>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                    <a
                        href="https://www.linkedin.com/in/delvadiyadeep"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light d-flex align-items-center gap-2 btn-sm footer-social-btn"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={22} />
                        <span className="d-none d-sm-inline">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/DELVADIYA-DEEP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light d-flex align-items-center gap-2 btn-sm footer-social-btn"
                        aria-label="GitHub"
                    >
                        <FaGithub size={22} />
                        <span className="d-none d-sm-inline">GitHub</span>
                    </a>
                </div>

                {/* Copyright */}
                <p className="mb-0 fs-6">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
