import React from 'react';
import Section from '../components/Section';

const projects = [
    {
        title: 'SMS Spam Classifier',
        description:
            'TF-IDF ML pipeline for one-line text spam detection, deployed via REST APIs with a Streamlit UI. Built for real-time fraud prevention in banking and financial communications.',
        tags: ['Python', 'Scikit-learn', 'NLP'],
        link: 'https://sms-spam-classifier-24.onrender.com',
        github: 'https://github.com/ThakurDash24/SMS_SPAM_CLASSIFIER_RENDER_DEPLOYED',
    },
    {
        title: 'EV Charging Chatbot',
        description:
            'FastAPI backend for an EV assistant chatbot powered by Generative AI. Delivered secure, scalable APIs and integrated pre-built AI services for seamless conversational support.',
        tags: ['FastAPI', 'GenAI', 'Backend'],
        link: 'https://unicharge-chatbot-24.onrender.com',
        github: 'https://github.com/ThakurDash24/UniCharge_Contibutor/tree/main/ml-engine/models/ChatBot',
    },
    {
        title: 'Personalised EV Wallet Backend',
        description:
            'Backend system leveraging machine learning to predict EV charging behavior and forecast monthly energy costs, enabling personalized financial insights for users',
        tags: ['Machine Learning', 'Forecasting', 'Data Analysis'],
        link: 'https://unicharge-wallet-24.onrender.com',
        github: 'https://github.com/ThakurDash24/UniCharge_Contibutor/tree/main/ml-engine/models/Personalised_Wallet',
    },
];

const Projects = () => {
    return (
        <Section id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                Projects
            </h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass"
                        style={{
                            padding: '2rem',
                            borderRadius: '6px',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'default',
                            transition:
                                'transform 0.35s ease, box-shadow 0.35s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                'translateY(-6px)';
                            e.currentTarget.style.boxShadow =
                                '0 18px 40px rgba(0,0,0,0.45)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.background = 'none';
                        }}
                        onMouseMove={(e) => {
                            const rect =
                                e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            e.currentTarget.style.background =
                                `radial-gradient(
                                    600px circle at ${x}px ${y}px,
                                    rgba(255,255,255,0.08),
                                    transparent 40%
                                )`;
                        }}
                    >
                        {/* Project Title (Live Link) */}
                        <h3
                            style={{
                                display: 'inline-block',
                                cursor: 'pointer',
                                transition:
                                    'transform 0.3s ease, color 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    'scale(1.05)';
                                e.currentTarget.style.color =
                                    'var(--accent-gold)';
                                e.currentTarget
                                    .closest('.glass')
                                    .style.backdropFilter =
                                    'blur(6px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.color = '';
                                e.currentTarget
                                    .closest('.glass')
                                    .style.backdropFilter =
                                    'none';
                            }}
                            onClick={() =>
                                window.open(project.link, '_blank')
                            }
                        >
                            {project.title}
                        </h3>

                        <p
                            style={{
                                color: 'var(--text-muted)',
                                marginTop: '0.75rem',
                            }}
                        >
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div style={{ marginTop: '1rem' }}>
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        marginRight: '1rem',
                                        color: 'var(--accent-gold)',
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* GitHub Link */}
                        <div style={{ marginTop: '1.2rem' }}>
                            <span
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer',
                                    opacity: 0.7,
                                    transition:
                                        'opacity 0.3s ease, color 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.color =
                                        'var(--text-color)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '0.7';
                                    e.currentTarget.style.color =
                                        'var(--text-muted)';
                                }}
                                onClick={() =>
                                    window.open(project.github, '_blank')
                                }
                            >
                                View on GitHub →
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
