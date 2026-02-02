import { useEffect, useRef, useState } from 'react'

const About = () => {
    const sectionRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-item')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    // Parallax effect for image
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 20
        const y = (e.clientY - rect.top - rect.height / 2) / 20
        setMousePosition({ x, y })
    }

    const credentials = [
        { icon: '🧬', label: 'MSc Biotechnology' },
        { icon: '🥗', label: 'Diploma in Nutrition' },
        { icon: '💪', label: 'NASM Certified' },
        { icon: '🚀', label: 'Startup Leader' }
    ]

    const contactItems = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                </svg>
            ),
            label: 'Email',
            value: 'reyouthcompany@gmail.com',
            href: 'mailto:reyouthcompany@gmail.com'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            label: 'Phone',
            value: '+91 9296953926',
            href: 'tel:+919296953926'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
            ),
            label: 'Instagram',
            value: '@reyouthcompany',
            href: 'https://www.instagram.com/reyouthcompany',
            external: true
        }
    ]

    return (
        <section className="about-page" ref={sectionRef}>
            <div className="about-viewport">
                <div className="container">
                    <div className="about-grid">
                        {/* Image Side */}
                        <div
                            className="about-image-wrapper reveal-left"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
                        >
                            <div
                                className="about-image-container"
                                style={{
                                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                                }}
                            >
                                <div className="about-image-glow"></div>
                                <div className="about-image-frame">
                                    <img
                                        src="/founder.png"
                                        alt="Aditya - Founder of ReYouth"
                                        className="founder-photo"
                                    />
                                </div>
                                <div className="about-image-badge">
                                    <span className="badge-dot"></span>
                                    <span>Founder</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="about-content-side reveal-right">
                            <div className="about-header">
                                <span className="about-label">About the Founder</span>
                                <h1>
                                    Meet <span className="text-gradient">Aditya</span>
                                </h1>
                                <p className="about-role">Chief Health Architect</p>
                            </div>

                            <p className="about-description">
                                Aditya leads ReYouth with a powerful synthesis of scientific rigor and
                                practical innovation, helping humans unlock their biological potential
                                through evidence-based longevity solutions.
                            </p>

                            {/* Credentials Grid */}
                            <div className="credentials-grid">
                                {credentials.map((cred, index) => (
                                    <div
                                        key={index}
                                        className="credential-card stagger-item"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <span className="credential-icon">{cred.icon}</span>
                                        <span className="credential-label">{cred.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Row */}
                            <div className="contact-row">
                                {contactItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="contact-item"
                                        target={item.external ? '_blank' : undefined}
                                        rel={item.external ? 'noopener noreferrer' : undefined}
                                    >
                                        <span className="contact-icon">{item.icon}</span>
                                        <span className="contact-value">{item.value}</span>
                                    </a>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary about-cta"
                            >
                                <span>Connect With Aditya</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
