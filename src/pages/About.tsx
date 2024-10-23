import React from 'react';
import { Card } from '../utils/design';
import { globalStyles } from '../variables';

const About: React.FC = () => {
  return (
    <div style={globalStyles.container}>
      <h1 style={globalStyles.sectionTitle}>About Us</h1>
      <Card>
        <p>
          At TechInnovate Solutions, we are passionate about leveraging technology to solve complex business challenges.
          With a team of expert developers, designers, and strategists, we deliver cutting-edge solutions that drive growth
          and efficiency for our clients.
        </p>
        <p>
          Our mission is to empower businesses through innovative technology solutions, fostering digital transformation
          and sustainable growth in an ever-evolving digital landscape.
        </p>
      </Card>
    </div>
  );
};

export default About;