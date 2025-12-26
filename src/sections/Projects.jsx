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

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass project-card"
                        onClick={() => window.open(project.link, '_blank')}
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
        </Section>
    );
};

export default Projects;
