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

                    <div className="solution-visual reveal-right">
                        <div className="dna-visualization">
                            <svg viewBox="0 0 200 300" className="dna-svg">
                                {/* DNA Helix Animation */}
                                <defs>
                                    <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#7AE7C7" />
                                        <stop offset="100%" stopColor="#7AE7C7" stopOpacity="0.3" />
                                    </linearGradient>
                                </defs>

                                {/* Left strand */}
                                <path
                                    d="M40 20 Q100 60, 40 100 Q-20 140, 40 180 Q100 220, 40 260"
                                    fill="none"
                                    stroke="url(#helixGradient)"
                                    strokeWidth="3"
                                    className="dna-strand"
                                />

                                {/* Right strand */}
                                <path
                                    d="M160 20 Q100 60, 160 100 Q220 140, 160 180 Q100 220, 160 260"
                                    fill="none"
                                    stroke="url(#helixGradient)"
                                    strokeWidth="3"
                                    className="dna-strand"
                                    style={{ animationDelay: '-2s' }}
                                />

                                {/* Connecting rungs */}
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                    <line
                                        key={i}
                                        x1="55"
                                        y1={40 + i * 35}
                                        x2="145"
                                        y2={40 + i * 35}
                                        stroke="#7AE7C7"
                                        strokeWidth="2"
                                        strokeOpacity="0.4"
                                        className="dna-rung"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    />
                                ))}

                                {/* Nodes */}
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                    <g key={`nodes-${i}`}>
                                        <circle
                                            cx="55"
                                            cy={40 + i * 35}
                                            r="6"
                                            fill="#7AE7C7"
                                            className="dna-node"
                                            style={{ animationDelay: `${i * 0.15}s` }}
                                        />
                                        <circle
                                            cx="145"
                                            cy={40 + i * 35}
                                            r="6"
                                            fill="#7AE7C7"
                                            className="dna-node"
                                            style={{ animationDelay: `${i * 0.15 + 0.05}s` }}
                                        />
                                    </g>
                                ))}
                            </svg>
                        </div>

                        <style>{`
              .dna-visualization {
                width: 100%;
                max-width: 300px;
                margin: 0 auto;
              }
              
              .dna-svg {
                width: 100%;
                height: auto;
              }
              
              .dna-strand {
                animation: dnaWave 4s ease-in-out infinite;
              }
              
              .dna-rung {
                animation: dnaGlow 2s ease-in-out infinite;
              }
              
              .dna-node {
                animation: dnaPulse 2s ease-in-out infinite;
              }
              
              @keyframes dnaWave {
                0%, 100% {
                  stroke-dashoffset: 0;
                }
                50% {
                  stroke-dashoffset: 20;
                }
              }
              
              @keyframes dnaGlow {
                0%, 100% {
                  stroke-opacity: 0.4;
                }
                50% {
                  stroke-opacity: 0.8;
                }
              }
              
              @keyframes dnaPulse {
                0%, 100% {
                  opacity: 0.8;
                  transform: scale(1);
                }
                50% {
                  opacity: 1;
                  transform: scale(1.2);
                }
              }
            `}</style>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProblemSolution
