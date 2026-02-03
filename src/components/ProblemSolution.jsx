import { useEffect, useRef } from 'react'

const ProblemSolution = () => {
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
        <section className="section problem-solution" ref={sectionRef}>
            <div className="container">
                <div className="problem-grid">
                    <div className="problem-content reveal-left">
                        <h2>
                            Your Loved Ones Are <span className="text-accent">Aging Faster</span> Than You Think
                        </h2>

                        <p>
                            Traditional healthcare is reactive—waiting for problems to appear before taking action.
                            By then, it's often too late. Hidden health risks silently progress for years,
                            becoming life-threatening before anyone notices.
                        </p>

                        <p>
                            ReYouth bridges the gap between reactive treatment and proactive wellness.
                            We treat your health as your most valuable asset—one that deserves constant
                            monitoring and strategic optimization.
                        </p>

                        <div className="problem-stats">
                            <div className="stat-item">
                                <div className="stat-value">70%</div>
                                <div className="stat-label">of chronic diseases are preventable</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">10+</div>
                                <div className="stat-label">years of hidden risk before symptoms</div>
                            </div>
                        </div>
                    </div>

                    <div className="solution-visual reveal-right" style={{ aspectRatio: 'auto', display: 'block', height: 'auto' }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '350px',
                            margin: '0 auto',
                            aspectRatio: '9/16',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}>
                            <iframe
                                src="https://www.youtube.com/embed/T5qNiXacxc4?controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=T5qNiXacxc4"
                                title="reyou final"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProblemSolution
