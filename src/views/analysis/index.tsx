import { Tabs, TabsProps } from 'antd';
import React from 'react';
import Overview from './overview';
import LayoutPage from '../layout/Layout';
import '../data-collection/form/venue/tabs.scss';

const items: TabsProps['items'] = [
  {
    key: 'overview',
    label: 'Overview',
    className: 'tab-body',
    children: <Overview />,
  },
  {
    key: 'reports',
    label: 'Reports',
    className: 'tab-body',
  },
];

const Analysis: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <LayoutPage>
      <Tabs
        defaultActiveKey="0"
        items={items}
        onChange={onChange}
        destroyInactiveTabPane
        className="no-overflow"
      />
    </LayoutPage>
  );
};

export default Analysis;
