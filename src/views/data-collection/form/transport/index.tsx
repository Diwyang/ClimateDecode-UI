import { FC } from 'react';
import { Tabs, TabsProps } from 'antd';
import TransportForm from './TransportForm';
import './tabs.scss';

const onChange = (key: string) => {
  console.log(key);
};

const VenueTabs: FC<{ prev: () => void; next: () => void }> = ({
  prev,
  next,
}) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Organiser',
      className: 'tab-body',
      children: <TransportForm prev={prev} next={next} subType="organiser" />,
    },
    {
      key: '2',
      label: 'Attendees',
      className: 'tab-body',
      children: <TransportForm prev={prev} next={next} subType="attendee" />,
    },
    {
      key: '3',
      label: 'Sub-Contractors',
      className: 'tab-body',
      children: (
        <TransportForm prev={prev} next={next} subType="subContractors" />
      ),
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      destroyInactiveTabPane
      className="no-overflow"
    />
  );
};

export default VenueTabs;
