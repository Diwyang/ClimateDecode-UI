import { Flex, Button, Form } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import {
  getTransport,
  setTransport,
} from '../../../../containers/data-collection/slice';
import { validateMessages } from '../../../utlils/mesage';
import EditableTable from '../../../common/table';
import React, { useState } from 'react';
import { Item } from '../../types';
import { TableItem } from '../../../common/table/types';

const formItems: Item[] = [
  {
    label: 'Mode Of Transport',
    fieldName: 'modeOfTransport',
    type: 'select',
    options: [
      {
        title: 'Ground',
        value: 'ground',
      },
      {
        title: 'Air',
        value: 'air',
      },
    ],
  },
  {
    label: 'Number of Travellers',
    fieldName: 'numberOfTravellers',
    type: 'number',
  },
  {
    label: 'Origin',
    fieldName: 'origin',
  },
  {
    label: 'Destination',
    fieldName: 'destination',
    dependencies: ['origin'],
    rules: [
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (
            !(value || getFieldValue('origin')) ||
            (value && getFieldValue('origin'))
          ) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error('Destination should also be selected with origin.')
          );
        },
      }),
    ],
  },
  {
    label: 'Travelled Km',
    fieldName: 'travelledKm',
  },
  {
    label: 'Fuel Type',
    fieldName: 'fuelType',
  },
];

const formName = 'transport';

const TransportForm: React.FC<{
  prev: () => void;
  next: () => void;
  subType: 'organiser' | 'attendee' | 'subContractors';
}> = ({ prev, next, subType }) => {
  const transport = useAppSelector(
    (state) => getTransport(state, subType) as TableItem[]
  ).map((item: TableItem, index: number) => {
    return { ...item, key: `${index}` };
  });
  const [data, setData] = useState<TableItem[]>(transport);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onChange = (newData: TableItem[]) => {
    setData(newData);
    dispatch(
      setTransport({
        [formName]: newData,
        subType,
      })
    );
  };

  const onFinish = () => {
    dispatch(
      setTransport({
        [formName]: data,
        subType,
      })
    );
  };
  const onNext = () => {
    dispatch(
      setTransport({
        [formName]: data,
        subType,
      })
    );
    next();
  };
  const onPrev = () => {
    dispatch(
      setTransport({
        [formName]: data,
        subType,
      })
    );
    prev();
  };
  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="horizontal"
      form={form}
      initialValues={{ transport }}
      labelWrap
      labelAlign="left"
      className="main-form full-height"
      colon={false}
    >
      <div className="form-fields-container no-overflow">
        <Flex gap="20px" vertical className="full-height">
          <EditableTable formItems={formItems} data={data} setData={onChange} />
        </Flex>
      </div>
      <Flex gap="large" className="form-actions-container">
        <Button type="primary" htmlType="button" shape="round" onClick={onPrev}>
          Prev
        </Button>
        <Button type="default" htmlType="submit" shape="round">
          Save
        </Button>
        <Button type="primary" htmlType="button" shape="round" onClick={onNext}>
          Next
        </Button>
      </Flex>
    </Form>
  );
};

export default TransportForm;
