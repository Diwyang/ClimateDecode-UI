import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Steps, theme } from 'antd';
import { Sidebar } from './sidebar.styled';
import {
  AnalysisSvg,
  BuyCreditSvg,
  CertificateSvg,
  DataCollectionSvg,
  OverviewSvg,
  AbateEmissionSvg,
} from './icons';
import logo from '../images/climate-decode-logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrentStep, steps } from './fromSteps';
import FormEnum from '../../data-collection/FormEnum';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  className?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    className,
  } as MenuItem;
}

const getMenuItems = (
  onStepChange: (id: number) => void,
  currentStep: Step
) => {
  return [
    getItem('Overview', 'overview', <OverviewSvg className="side-nav-icon" />),
    getItem(
      'Data Collection',
      'dataCollection',
      <DataCollectionSvg className="side-nav-icon" />,
      [
        getItem(
          <div
            style={{
              padding: '0 10px',
            }}
          >
            <Steps
              key="sdfs"
              current={currentStep.id}
              onChange={onStepChange}
              items={steps.map((s) => ({
                title: s.title,
              }))}
              direction="vertical"
              progressDot
            />
          </div>,
          'steps'
        ),
      ],
      'steps-menu-li'
    ),
    getItem('Analysis', 'analysis', <AnalysisSvg className="side-nav-icon" />),
    getItem(
      'Abate Emissions',
      'abate-emission',
      <AbateEmissionSvg className="side-nav-icon" />
    ),
    getItem(
      'Buy Credit',
      'buy-credits',
      <BuyCreditSvg className="side-nav-icon" />
    ),
    getItem(
      'Certificate',
      'certificate',
      <CertificateSvg className="side-nav-icon" />
    ),
  ];
};

const AppSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentStep = getCurrentStep(location.pathname);

  const onStepChange = (id: number) => {
    navigate(`/dataCollection/${FormEnum[steps[id].id].toLowerCase()}`);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sidebar
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: colorBgContainer,
      }}
      collapsed={collapsed}
      onCollapse={(value: boolean) => setCollapsed(value)}
    >
      <div className="climate-decode-logo">
        <img src={logo} />
      </div>
      <Menu
        defaultSelectedKeys={[location.pathname.split('/')[1]]}
        mode="inline"
        items={getMenuItems(onStepChange, currentStep)}
        onClick={({ key }) => {
          if (key !== 'steps') {
            navigate(`/${key}`);
          }
        }}
      />
    </Sidebar>
  );
};

export default AppSidebar;
