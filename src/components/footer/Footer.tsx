import React from 'react';
import { companyInfo, colors } from '../../variables';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '../../utils/icons';

const CustomFooter: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 0',
      }}
    >
      <div>
        <h3 style={{ color: colors.secondary }}>{companyInfo.name}</h3>
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
      <div>
        <p>
          <MailOutlined /> {companyInfo.email}
        </p>
        <p>
          <PhoneOutlined rotate={90} /> {companyInfo.phone}
        </p>
        <p>
          <EnvironmentOutlined /> {companyInfo.address}
        </p>
      </div>
    </div>
  );
};

export default CustomFooter;
