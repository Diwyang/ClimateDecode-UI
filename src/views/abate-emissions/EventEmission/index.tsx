import { Flex, Collapse } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import Travel from './Travel';

function EventEmission() {
  return (
    <div className="abate-emission-collapse">
      <h1>ABATE YOUR EVENT EMISSIONS</h1>
      <Flex gap="20px" vertical>
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '1',
              label: 'Travel',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '2',
              label: 'Event',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '3',
              label: 'Materials',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '4',
              label: 'Venue',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '5',
              label: 'Waste',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '6',
              label: 'Food',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '7',
              label: 'Marketing',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '8',
              label: 'Accomodation',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '9',
              label: 'preparation',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '10',
              label: 'Water',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '11',
              label: 'Transport',
              children: <Travel />,
            },
          ]}
        />
        <Collapse
          expandIconPosition="end"
          accordion
          expandIcon={({ isActive }) => (
            <CaretDownOutlined rotate={isActive ? 180 : 0} />
          )}
          items={[
            {
              key: '12',
              label: 'Streaming',
              children: <div></div>,
            },
          ]}
        />
      </Flex>
    </div>
  );
}

export default EventEmission;
