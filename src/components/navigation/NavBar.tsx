import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Typography } from '../../utils/design';
import { navigationItems, companyInfo, colors } from '../../variables';
const { Text } = Typography;
const NavBar: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={companyInfo.logo}
          alt={companyInfo.name}
          style={{ height: 40, marginRight: 16 }}
        />
        <Text style={{ color: colors.primary, margin: 0 }}>
          {companyInfo.name}
        </Text>
        <Menu mode="horizontal" style={{ backgroundColor: colors.other }}>
          {navigationItems.map((item) => (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
