import { FC } from 'react';
import { Tabs, TabsProps } from 'antd';
import './overView.scss';
import OverviewForm from './overview';
import LayoutPage from '../layout/Layout';

const onChange = (key: string) => {
  console.log(key);
};

const Overview: FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '0',
      label: 'OverView',
      className: 'tab-body',
      children: <OverviewForm />,
    },
    {
      key: '1',
      label: 'Reports',
      className: 'tab-body',
      children: <OverviewForm />,
    },
    {
      key: '2',
      label: 'Timeline',
      className: 'tab-body',
      children: <OverviewForm />,
    },
  ];
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

export default Overview;
