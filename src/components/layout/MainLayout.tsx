import React from 'react';
import { Layout } from '../../utils/design';
import NavBar from '../navigation/NavBar';
import CustomFooter from '../footer/Footer';
import { colors } from '../../variables';

const { Header, Content, Footer } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: colors.background,
          borderBottom: `2px solid ${colors.primary}`,
        }}
      >
        <NavBar />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: colors.background, padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: colors.background }}>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default MainLayout;