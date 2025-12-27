import React from 'react';
import Section from '../components/Section';

const projects = [
    {
        title: 'SMS Spam Classifier',
        description:
            'With financial fraud rising through deceptive SMS, I built a robust TF-IDF machine learning pipeline to detect spam in real-time. Deployed via REST APIs with a Streamlit UI, this solution acts as a first line of defense for banking and financial communications.',
        tags: ['Python', 'Scikit-learn', 'NLP'],
        link: 'https://sms-spam-classifier-24.onrender.com',
        github: 'https://github.com/ThakurDash24/SMS_SPAM_CLASSIFIER_RENDER_DEPLOYED',
    },
    {
        title: 'EV Charging Chatbot',
        description:
            'EV users often face a lack of instant support. To bridge this gap, I developed a GenAI-powered chatbot backend using FastAPI. This system delivers secure, scalable APIs and integrates pre-built AI services to provide seamless, conversational assistance.',
        tags: ['FastAPI', 'GenAI', 'Backend'],
        link: 'https://unicharge-chatbot-24.onrender.com',
        github: 'https://github.com/ThakurDash24/UniCharge_Contibutor/tree/main/ml-engine/models/ChatBot',
    },
    {
        title: 'Personalised EV Wallet Backend',
        description:
            'Unpredictable charging costs can be a barrier for EV adoption. I created a backend system leveraging machine learning to forecast monthly energy expenses, empowering users with personalized financial insights and predictable budgeting.',
        tags: ['Machine Learning', 'Forecasting', 'Data Analysis'],
        link: 'https://unicharge-wallet-24.onrender.com',
        github: 'https://github.com/ThakurDash24/UniCharge_Contibutor/tree/main/ml-engine/models/Personalised_Wallet',
    },
];

const Projects = () => {
    return (
        <Section id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                Projects
            </h2>

            <div
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    letterSpacing: '0.05em',
                    marginBottom: '3rem',
                    opacity: 0.9,
                    animation: 'luxuriousPulse 4s ease-in-out infinite',
                }}
            >
                Click on a project name to explore
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass project-card"
                        onClick={() => window.open(project.link, '_blank')}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            e.currentTarget.style.background = `radial-gradient(
                                600px circle at ${x}px ${y}px,
                                rgba(255,255,255,0.08),
                                transparent 40%
                            )`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '';
                        }}
                    >
                        {/* Project Title (Live Link) */}
                        <h3 className="project-title">
                            {project.title}
                        </h3>

                        <p className="project-description">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="project-tag">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* GitHub Link */}
                        <div className="project-link-container">
                            <span
                                className="project-link"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.github, '_blank');
                                }}
                            >
                                View on GitHub →
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <style>
                {`
                @keyframes luxuriousPulse {
                    0%, 100% { 
                        opacity: 0.5; 
                        color: var(--text-muted);
                    }
                    50% { 
                        opacity: 1; 
                        color: var(--accent-gold);
                    }
                }
                `}
            </style>
        </Section>
    );
};

export default Projects;
