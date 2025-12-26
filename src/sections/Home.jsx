import React from 'react';

const Home = () => {
    return (
        <section
            id="home"
            className="section"
            style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
        >
            {/* Background */}
            {/* Background handled globally in App.jsx */}

            <div className="container">
                <p
                    style={{
                        color: 'var(--accent-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                    }}
                >
                    Aspiring Data Scientist
                </p>

                <h1
                    style={{
                        fontSize: 'clamp(3.3rem, 8vw, 6.3rem)',
                        lineHeight: 1.05,
                        marginBottom: '1.6rem',
                    }}
                >
                    Most Decisions <br />
                    <span
                        style={{
                            fontStyle: 'italic',
                            fontFamily: 'var(--font-heading)',
                            opacity: 0.9,
                        }}
                    >
                        Fail
                    </span>{' '}
                    Before the First Line of Code.
                </h1>

                <p
                    style={{
                        maxWidth: '620px',
                        fontSize: '1.05rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        fontStyle: 'italic',
                    }}
                >
                    I build systems that decide better.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#projects" className="btn btn-primary">
                        View Work
                    </a>

                    <a href="#contact" className="btn btn-secondary">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
