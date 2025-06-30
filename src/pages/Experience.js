import React from 'react';

const experiences = [
  {
    role: 'AI Intern',
    company: 'Ownova',
    duration: 'June 2025 – Present',
    location: 'Lahore, Pakistan',
    description:
      'Creating AI-powered chatbots, voice agents, and automation systems for various platforms. Focused on enhancing business process efficiency through conversational AI.',
  },
  {
    role: 'Freelance AI/ML Developer',
    company: 'Remote',
    duration: '2024 – Present',
    location: 'Online',
    description:
      'Built and deployed multiple AI-driven applications like BioBot and NikiBot using GPT-2, LangChain, and vector databases. Worked on fine-tuning models and deploying interactive user experiences.',
  },
];

const Experience = () => {
  return (
    <div style={{ padding: '50px 20px', color: 'white', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
        My <span style={{ color: '#4db8ff', textDecoration: 'underline' }}>Experience</span>
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '25px',
              width: '300px',
              boxShadow: '0 0 25px rgba(77, 184, 255, 0.3)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            <h3 style={{ color: '#4db8ff' }}>{exp.role}</h3>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{exp.company}</p>
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
              {exp.duration} | {exp.location}
            </p>
            <p style={{ fontSize: '0.95rem' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
