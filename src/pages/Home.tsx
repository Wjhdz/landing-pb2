import React from 'react';
import { Button } from '../utils/design';
import { companyInfo, globalStyles, colors } from '../variables';

const Home: React.FC = () => {
  return (
    <div style={globalStyles.container}>
      <h1 style={globalStyles.sectionTitle}>Welcome to {companyInfo.name}</h1>
      <p style={globalStyles.sectionSubtitle}>Innovating for a better tomorrow</p>
      <div style={{ marginTop: '2rem' }}>
        <Button type="primary" size="large" style={{ marginRight: '1rem' }}>
          Our Services
        </Button>
        <Button size="large" style={{ backgroundColor: colors.secondary, color: colors.background }}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Home;