import React from 'react';
import Section from '../components/Section';

const Research = () => {
    return (
        <Section id="research">
            {/* Pulse animation for active focus */}
            <style>
                {`
                @keyframes focusPulse {
                    0% { opacity: 0.4; }
                    50% { opacity: 1; }
                    100% { opacity: 0.4; }
                }
                `}
            </style>

            <h2
                style={{
                    fontSize: '2.5rem',
                    marginBottom: '2rem',
                    textAlign: 'center',
                }}
            >
                Research & Exploration
            </h2>

            <p
                style={{
                    color: 'var(--text-muted)',
                    marginBottom: '3rem',
                    textAlign: 'center',
                }}
            >
                Exploring modern machine learning and AI systems with a focus on
                building solutions that move beyond theory into real-world impact.
            </p>

            {/* Responsive Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                }}
            >
                {/* Applied ML */}
                <div
                    className="glass"
                    style={{
                        padding: '2rem',
                        borderRadius: '6px',
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
                        e.currentTarget.style.boxShadow =
                            '0 18px 40px rgba(0,0,0,0.45)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'none';
                    }}
                >
                    <h3>Applied Machine Learning</h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Working on practical ML techniques including clustering,
                        regression, forecasting, model evaluation, and deployment
                        strategies for production-ready systems.
                    </p>
                </div>

                {/* Deep Learning */}
                <div
                    className="glass"
                    style={{
                        padding: '2rem',
                        borderRadius: '6px',
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
                        e.currentTarget.style.boxShadow =
                            '0 18px 40px rgba(0,0,0,0.45)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'none';
                    }}
                >
                    <h3>Deep Learning Concepts</h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Studying neural network fundamentals including backpropagation,
                        optimization techniques, CNNs, and sequence models to
                        understand how deep architectures learn representations.
                    </p>
                </div>

                {/* NLP & GenAI */}
                <div
                    className="glass"
                    style={{
                        padding: '2rem',
                        borderRadius: '6px',
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
                        e.currentTarget.style.boxShadow =
                            '0 18px 40px rgba(0,0,0,0.45)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'none';
                    }}
                >
                    <h3>NLP & Generative AI</h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Exploring text representation, transformers, LLM behavior,
                        prompt engineering, and generative workflows for building
                        conversational and content-driven AI systems.
                    </p>
                </div>

                {/* Agentic AI */}
                <div
                    className="glass"
                    style={{
                        padding: '2rem',
                        borderRadius: '6px',
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
                        e.currentTarget.style.boxShadow =
                            '0 18px 40px rgba(0,0,0,0.45)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'none';
                    }}
                >
                    <h3>Agentic AI</h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Actively working on agent-based AI systems using LangChain,
                        tool calling, memory, and planning patterns to build autonomous
                        agents capable of reasoning and goal-driven execution.
                    </p>

                    <p
                        style={{
                            marginTop: '1rem',
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            animation:
                                'focusPulse 1s ease-in-out infinite',
                        }}
                    >
                        Current focus
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Research;
