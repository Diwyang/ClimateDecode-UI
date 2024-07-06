import { FC } from 'react';
import { Tabs, TabsProps } from 'antd';
import VenueForm from './VenueForm';
import './tabs.scss';
import { Rule } from 'antd/es/form';
import { Item } from '../../types';

const requiredRule: Rule = {
  required: true,
};

const nonNegative: Rule = {
  type: 'number',
  min: 0,
};

const electricityFields: Item[] = [
  {
    label: 'Annual consumption',
    fieldName: 'annual_consumption',
    type: 'number',
    suffix: '(kWh)',
    rules: [requiredRule, nonNegative],
  },
  {
    label: 'Consumption for the event period',
    fieldName: 'event_period_consumption',
    type: 'number',
    suffix: '(kWh)',
    rules: [{ ...requiredRule, ...nonNegative }],
  },
  {
    label: 'Compensation per area',
    fieldName: 'consumption_per_area',
    type: 'number',
    suffix: '(kWh/sqm)',
    rules: [{ ...requiredRule, ...nonNegative }],
  },
  {
    label: 'Compensation per guest',
    fieldName: 'per_guest_consumption',
    type: 'number',
    suffix: '(kWh)',
    rules: [{ ...requiredRule, ...nonNegative }],
  },
  {
    label: 'Electricity origin',
    fieldName: 'origin_type',
    type: 'select',
    options: [
      {
        label: 'Renewable',
        value: 'RENEWABLE',
      },
      {
        label: 'Grid',
        value: 'GRID',
      },
      {
        label: 'Unknown',
        value: 'UNKNOWN',
      },
      {
        label: 'District Heating',
        value: 'DISTRICTHEATING',
      },
      {
        label: 'Heating Oil',
        value: 'HEATINGOIL',
      },
      {
        label: 'Natural Gas',
        value: 'NATURALGAS',
      },
      {
        label: 'Other',
        value: 'OTHER',
      },
      {
        label: 'District Cooling',
        value: 'DISTRICTCOOLING',
      },
    ],
  },
  {
    label: 'Comments',
    fieldName: 'comments',
    type: 'textarea',
  },
];

const informatinFields: Item[] = [
  {
    label: 'Percentage of renewable energy at the venue (in %)',
    fieldName: 'percantage_renewable_energy',
    type: 'number',
  },
  {
    label: 'LEED/green building certified',
    type: 'select',
    options: [
      {
        label: 'Yes',
        value: 'yes',
      },
      {
        label: 'No',
        value: 'no',
      },
    ],
    fieldName: 'LeedOrGreenBuildingCertified',
  },
  {
    label: 'Comment',
    fieldName: 'comments',
    type: 'textarea',
  },
];

const fuelConsumption: Item[] = [
  {
    label: 'Consumption',
    fieldName: 'event_period_consumption',
  },
  {
    label: 'Unit',
    fieldName: 'unit',
  },
  {
    label: 'Fuel Type',
    fieldName: 'fuel_type',
  },
];

const formName = 'venue';

const onChange = (key: string) => {
  console.log(key);
};

const TransportTabs: FC<{ prev: () => void; next: () => void }> = ({
  prev,
  next,
}) => {
  const items: TabsProps['items'] = [
    {
      key: '0',
      label: 'Information',
      className: 'tab-body',
      children: (
        <VenueForm
          prev={prev}
          next={next}
          subType="information"
          fields={informatinFields}
          formName={formName}
          energyType="RENEWABLEENERGY"
        />
      ),
    },
    {
      key: '1',
      label: 'Electricity',
      className: 'tab-body',
      children: (
        <VenueForm
          prev={prev}
          next={next}
          subType="electricity"
          fields={electricityFields}
          formName={formName}
          energyType="ELECTRICITY"
        />
      ),
    },
    {
      key: '2',
      label: 'Energy Of Heading',
      className: 'tab-body',
      children: (
        <VenueForm
          prev={prev}
          next={next}
          subType="energyOfHeating"
          fields={electricityFields}
          formName={formName}
          energyType="ENERGYFORHEATING"
        />
      ),
    },
    {
      key: '3',
      label: 'Energy Of Cooling',
      className: 'tab-body',
      children: (
        <VenueForm
          prev={prev}
          next={next}
          subType="energyOfCooling"
          fields={electricityFields}
          formName={formName}
          energyType="ENERGYFORCOOLING"
        />
      ),
    },
    {
      key: '4',
      label: 'Other fuel consumption(natural gas, petrol, diesel, etc.)',
      className: 'tab-body',
      children: (
        <VenueForm
          prev={prev}
          next={next}
          subType="otherFuelConsumption"
          fields={fuelConsumption}
          formName={formName}
          energyType="OTHERFUELCONSUMPTION"
        />
      ),
    },
  ];
  return (
    <Tabs
      defaultActiveKey="0"
      items={items}
      onChange={onChange}
      destroyInactiveTabPane
      className="no-overflow"
    />
  );
};

export default TransportTabs;
