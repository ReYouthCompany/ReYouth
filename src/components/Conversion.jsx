import { useEffect, useRef } from 'react'

const Conversion = () => {
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
            { threshold: 0.3 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="section conversion" ref={sectionRef}>
            <div className="container">
                <div className="conversion-box reveal">
                    <div className="urgency-badge">
                        🧬 Limited Slots Available
                    </div>

                    <h2>
                        Ready to <span className="text-gradient">Redefine Your Age?</span>
                    </h2>

                    <p>
                        Take the first step towards optimized health. Fill out our quick form
                        and our health experts will create a personalized plan for you or your loved ones.
                    </p>

                    <a
                        href="https://forms.gle/Rgxkpn99UkyFE7Xu7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Start Your Health Journey
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>

                    <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                        No credit card required. Free initial consultation.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Conversion
