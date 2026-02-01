import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/reyou-logo.png" alt="ReYouth" />
                            <span>ReYouth</span>
                        </Link>
                        <p>
                            Redefine your age with advanced health tracking and personalized care.
                            We help you stay fitter and younger through science-backed solutions.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#programs">Programs</a></li>
                            <li><Link to="/about">About Founder</Link></li>
                            <li>
                                <a
                                    href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} ReYouth. All rights reserved.</p>

                    <div className="social-links">
                        <a
                            href="https://www.instagram.com/reyouthcompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Instagram @reyouthcompany"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1" fill="currentColor" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/reyouth.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Instagram @reyouth.in"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1" fill="currentColor" />
                            </svg>
                        </a>
                        <a
                            href="mailto:reyouthcompany@gmail.com"
                            className="social-link"
                            aria-label="Email us"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 6l-10 7L2 6" />
                            </svg>
                        </a>
                    </div>

                    <a href="/terms" style={{ fontSize: '0.625rem' }}>Terms & Conditions</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
