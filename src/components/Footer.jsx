import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <img src="/reyou-logo.png" alt="ReYouth" />
                                <span>ReYouth</span>
                            </Link>
                            <p className="footer-tagline">
                                Redefine your biological age with science-backed longevity solutions.
                                Your journey to younger, healthier you starts here.
                            </p>
                            <div className="footer-badges">
                                <div className="footer-badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    <span>Science-Backed</span>
                                </div>
                                <div className="footer-badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <span>Personalized Care</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="footer-links-section">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#programs">Programs</a></li>
                                <li><Link to="/about">About Founder</Link></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="footer-contact-section">
                            <h4 className="footer-heading">Get In Touch</h4>
                            <div className="footer-contact-list">
                                <a href="mailto:reyouthcompany@gmail.com" className="footer-contact-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                    <span>reyouthcompany@gmail.com</span>
                                </a>
                            </div>
                            <div className="footer-social">
                                <a
                                    href="https://www.instagram.com/reyouthcompany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Instagram @reyouthcompany"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/reyouth.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Instagram @reyouth.in"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* CTA Column */}
                        <div className="footer-cta-section">
                            <h4 className="footer-heading">Start Your Journey</h4>
                            <p className="footer-cta-text">
                                Ready to unlock your biological potential? Join thousands who've already started.
                            </p>
                            <a
                                href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary footer-cta-btn"
                            >
                                <span>Get Started Free</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} ReYouth. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <Link to="/terms">Terms & Conditions</Link>
                            <span className="footer-divider">•</span>
                            <a href="#privacy">Privacy Policy</a>
                        </div>
                        <div className="footer-bottom-accent">
                            <span className="footer-accent-dot"></span>
                            <span className="footer-made-with">Made with ❤️ for longevity</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
