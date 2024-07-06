import { ReactNode } from 'react';
import { Layout, theme } from 'antd';
import Sidebar from './sidebar';
import AppHeader from './header';

const { Content } = Layout;

function LayoutPage({ children }: { children: ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout style={{ marginLeft: 210, height: '100vh' }}>
        <Content
          style={{
            padding: '16px',
            overflow: 'auto',
            // background: colorBgContainer,
          }}
        >
          <AppHeader />
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutPage;
