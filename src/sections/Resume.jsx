import React from 'react';
import Section from '../components/Section';

const Resume = () => {
    return (
        <Section id="resume">
            {/* Border pulse animation */}
            <style>
                {`
                @keyframes borderPulse {
                    0% {
                        box-shadow: 0 0 0 rgba(197,160,89,0.0);
                        border-color: rgba(197,160,89,0.4);
                    }
                    50% {
                        box-shadow: 0 0 18px rgba(197,160,89,0.35);
                        border-color: rgba(197,160,89,0.9);
                    }
                    100% {
                        box-shadow: 0 0 0 rgba(197,160,89,0.0);
                        border-color: rgba(197,160,89,0.4);
                    }
                }
                `}
            </style>

            <div
                className="glass"
                style={{
                    padding: '4rem',
                    textAlign: 'center',
                    borderRadius: '6px',
                    border: '1px solid var(--accent-gold)',
                    animation: 'borderPulse 2.5s ease-in-out infinite',
                    position: 'relative',
                    overflow: 'hidden',
                    transition:
                        'transform 0.35s ease, box-shadow 0.35s ease',
                }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    e.currentTarget.style.background =
                        `radial-gradient(
                            600px circle at ${x}px ${y}px,
                            rgba(255,255,255,0.08),
                            transparent 40%
                        )`;
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'none';
                }}
            >
                <h2
                    style={{
                        fontSize: '2rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    Interested in my full background?
                </h2>

                <p
                    style={{
                        color: 'var(--text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginInline: 'auto',
                    }}
                >
                    Download my concise resume for a quick overview, or explore
                    the extended version for a deeper look into my academic and
                    technical journey.
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Resume */}
                    <button
                        onClick={() =>
                            window.open(
                                '/src/assets/Resume_ThakurDash.pdf',
                                '_blank'
                            )
                        }
                        style={{
                            padding: '1rem 2.2rem',
                            background: 'var(--accent-gold)',
                            color: 'var(--bg-color)',
                            border: 'none',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition:
                                'transform 0.3s ease, opacity 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                'translateY(-2px)';
                            e.currentTarget.style.opacity = '0.9';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.opacity = '1';
                        }}
                    >
                        Download Resume (PDF)
                    </button>

                    {/* Extended CV */}
                    <button
                        onClick={() =>
                            window.open(
                                '/src/assets/CV_ThakurDash.pdf',
                                '_blank'
                            )
                        }
                        style={{
                            padding: '1rem 2.2rem',
                            background: 'transparent',
                            color: 'var(--text-color)',
                            border: '1px solid var(--text-color)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition:
                                'transform 0.3s ease, opacity 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                'translateY(-2px)';
                            e.currentTarget.style.opacity = '0.85';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.opacity = '1';
                        }}
                    >
                        View Extended CV
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default Resume;
