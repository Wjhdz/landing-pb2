import React from 'react';
import { Card, Button } from '../utils/design';
import { globalStyles, colors } from '../variables';

const Careers: React.FC = () => {
  const openings = [
    { title: 'Senior React Developer', department: 'Engineering' },
    { title: 'UX/UI Designer', department: 'Design' },
    { title: 'DevOps Engineer', department: 'Operations' },
  ];

  return (
    <div style={globalStyles.container}>
      <h1 style={globalStyles.sectionTitle}>Join Our Team</h1>
      <p style={globalStyles.sectionSubtitle}>Explore exciting career opportunities at TechInnovate Solutions</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {openings.map((job, index) => (
          <Card key={index} title={job.title} extra={job.department} style={{ height: '100%' }}>
            <Button type="primary" style={{ backgroundColor: colors.secondary }}>Apply Now</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Careers;