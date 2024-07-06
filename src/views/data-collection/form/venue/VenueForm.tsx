import { Flex, Button, Form, message } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import {
  dataLoading,
  getVenue,
  venueSaved,
} from '../../../../containers/data-collection/slice';
import { validateMessages } from '../../../utlils/mesage';
import EditableTable from '../../../common/table';
import React, { useState } from 'react';
import { Item } from '../../types';
import { useSaveVenueMutation } from '../../../../containers/data-collection/api';

const VenueForm: React.FC<{
  prev: () => void;
  next: () => void;
  subType:
    | 'information'
    | 'electricity'
    | 'energyOfHeating'
    | 'energyOfCooling'
    | 'otherFuelConsumption';
  fields: Item[];
  formName: string;
  energyType: string;
}> = ({ prev, next, subType, fields, energyType }) => {
  const venue = useAppSelector(
    (state) => getVenue(state, subType) as any[]
  ).map((item: any, index: number) => {
    return { ...item, key: `${index}` };
  });
  const [data, setData] = useState<any[]>(venue);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const [saveVenue] = useSaveVenueMutation({
    fixedCacheKey: 'shared-update-post',
  });

  // const { data: fetchedVenues, isLoading } = useGetVenueQuery({
  //   fixedCacheKey: 'shared-update-post',
  // });

  const saveVenueData = async (venueInfo: any, newData: any[]) => {
    dispatch(dataLoading());
    try {
      const response = (await saveVenue(venueInfo)) as any;
      const responseData: VenueInfo = response.data.data;
      console.log(responseData);
      message.success('Venue Saved Successfully!');
      const index = newData.findIndex((item) => venueInfo.key === item.key);
      const item = newData[index];
      const updatedRow = {
        ...item,
        ...responseData,
      };
      newData.splice(index, 1, updatedRow);
      onChange(newData);
    } catch (ex) {
      console.log(ex);
      message.error('Venue Save Failed!: ' + ex);
    }
  };

  const onChange = (newData: any[]) => {
    setData(newData);
    dispatch(
      venueSaved({
        venue: {
          [subType]: newData,
        },
      })
    );
  };

  const onFinish = () => {};
  const onNext = () => {
    next();
  };
  const onPrev = () => {
    prev();
  };

  const onAddRow = (row: any, newData: any[]) => {
    setData(newData);
    const data = {
      ...row,
      event_id: 1,
      event_type: 'MORNINGEVENT',
      size_of_venue: 1,
      energy_type: energyType,
    };
    saveVenueData(data, newData);
  };

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="horizontal"
      form={form}
      initialValues={{ venue }}
      labelWrap
      labelAlign="left"
      className="main-form full-height"
      colon={false}
    >
      <div className="form-fields-container no-overflow">
        <Flex gap="20px" vertical className="full-height">
          <EditableTable
            formItems={fields}
            data={data}
            setData={onChange}
            addRow={onAddRow}
            updateRow={onAddRow}
          />
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

export default VenueForm;
