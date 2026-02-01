import { useEffect, useRef } from 'react'

const About = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="about-hero" ref={sectionRef}>
            <div className="container">
                <div className="about-content">
                    <div className="about-image reveal-left">
                        <div className="about-image-placeholder">A</div>
                    </div>

                    <div className="about-text reveal-right">
                        <h1>Meet <span className="text-accent">Aditya</span></h1>
                        <p className="about-title">Founder & Chief Health Architect</p>

                        <p>
                            Aditya leads ReYouth with a powerful synthesis of scientific rigor and
                            practical innovation. Fueled by an unwavering vision to make biological
                            age reversal a reality, he founded the company to help humans unlock
                            and optimize their biological potential.
                        </p>

                        <p>
                            His expertise is deeply rooted in science, backed by an MSc in
                            Biotechnology, a Diploma in Health & Nutrition, and a NASM Certification.
                        </p>

                        <p>
                            Aditya's leadership is defined by resilience and strategic experience
                            within high-growth startups. He leverages this blend of technical knowledge
                            and operational expertise to drive the company's mission: empowering individuals
                            to reclaim their vitality and redefine longevity through evidence-based solutions.
                        </p>

                        <div className="credentials">
                            <span className="credential-badge">MSc Biotechnology</span>
                            <span className="credential-badge">Diploma in Health & Nutrition</span>
                            <span className="credential-badge">NASM Certified</span>
                            <span className="credential-badge">Startup Experience</span>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <a
                                href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Connect With Us
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="section" style={{ paddingTop: '4rem' }}>
                    <div className="conversion-box reveal" style={{ textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Get In Touch</h3>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '3rem',
                            flexWrap: 'wrap',
                            marginBottom: '2rem'
                        }}>
                            <div>
                                <p className="text-mono text-accent" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                                    EMAIL
                                </p>
                                <a
                                    href="mailto:reyouthcompany@gmail.com"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    reyouthcompany@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="text-mono text-accent" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                                    PHONE
                                </p>
                                <a
                                    href="tel:+919296953926"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    +91 9296953926
                                </a>
                            </div>

                            <div>
                                <p className="text-mono text-accent" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                                    INSTAGRAM
                                </p>
                                <a
                                    href="https://www.instagram.com/reyouthcompany"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    @reyouthcompany
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
