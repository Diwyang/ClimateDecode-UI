import styled from 'styled-components';
import { Layout, Menu, Typography } from 'antd';
import logo from '../../layout/images/climate-decode-logo.svg';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

const items: MenuItemType[] = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'measure',
    label: 'Measure',
  },
  {
    key: 'buyCredit',
    label: 'Buy Credit',
  },
  {
    key: 'getCertified',
    label: 'Get Certified',
  },
];

const OverlapContainer = styled.div<{ color?: string }>`
  width: 100%;
  background: none;
  font-family: 'Roboto', Helvetica;
  display: flex;
  .landing-page-layout {
    background: none;
  }
  .landing-page-content {
    padding: 100px 50px 0 50px;
  }
  .climate-decode-logo {
    display: flex;
    background: #fff;
    margin-top: 78px;
    img {
      margin: auto;
    }
  }
  .banner-header {
    color: ${(props) => (props.color ? props.color : null)};
    font-family: 'Roboto-Bold', Helvetica;
    font-size: 36px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: 45px;
  }
  .banner-paragraph {
    color: ${(props) => (props.color ? props.color : null)};
    font-family: 'Roboto-SemiBold', Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 32px;
    width: 50%;
  }
`;

const { Title, Paragraph } = Typography;

export const Overlap = ({
  title,
  description,
  color,
  extraContent,
}: {
  title: string;
  description: string;
  color?: string;
  extraContent?: any;
}): JSX.Element => {
  const navigate = useNavigate();

  const onMenuClick = ({ key }: { key: string }) => {
    switch (key) {
      case 'measure':
        navigate('/climate-neutral');
        break;
      case 'home':
        navigate('/');
        break;
    }
  };

  return (
    <OverlapContainer className="overlap" color={color}>
      <Layout className="landing-page-layout">
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
          }}
        >
          <div className="climate-decode-logo">
            <img src={logo} />
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              justifyContent: 'flex-end',
              background: 'none',
              color,
              border: 'none',
            }}
            onClick={onMenuClick}
          />
        </Header>
        <Content className="landing-page-content">
          <div>
            <Typography>
              <Title className="banner-header">{title}</Title>
              <Paragraph className="banner-paragraph">{description}</Paragraph>
            </Typography>
          </div>
          {extraContent}
        </Content>
      </Layout>
    </OverlapContainer>
  );
};
