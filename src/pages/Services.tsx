import React from 'react';
import { Card } from '../utils/design';
import { services, globalStyles } from '../variables';

const Services: React.FC = () => {
  return (
    <div style={globalStyles.container}>
      <h1 style={globalStyles.sectionTitle}>Our Services</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {services.map((service, index) => (
          <Card key={index} title={service.title} style={{ height: '100%' }}>
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;