import React from 'react';
import { Card } from '../utils/design';
import { globalStyles } from '../variables';

const Projects: React.FC = () => {
  const projects = [
    { title: 'E-commerce Platform', description: 'A scalable online marketplace for a global retail client.' },
    { title: 'Healthcare App', description: 'An innovative mobile app for patient care management.' },
    { title: 'Financial Dashboard', description: 'Real-time data visualization for a leading fintech company.' },
  ];

  return (
    <div style={globalStyles.container}>
      <h1 style={globalStyles.sectionTitle}>Our Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {projects.map((project, index) => (
          <Card key={index} title={project.title} style={{ height: '100%' }}>
            <p>{project.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;