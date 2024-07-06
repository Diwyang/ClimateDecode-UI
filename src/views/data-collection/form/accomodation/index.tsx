import { Flex, Collapse, Button, Form } from 'antd';
import AccomodationItems from './AccomodationItems';
import { CaretDownOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setAccomodation } from '../../../../containers/data-collection/slice';
import { validateMessages } from '../../../utlils/mesage';

const accomodatonItems = [
  {
    label: 'Accommodation for attendees',
    fields: [
      {
        label: 'No of Nights per person',
        fieldName: 'attendeeNightsCount',
      },
      {
        label: 'No of person who need Accommodation',
        fieldName: 'attendeeCount',
      },
    ],
  },
  {
    label: 'Accommodation for Organizers',
    fields: [
      {
        label: 'No of Nights per person',
        fieldName: 'organizersNightsCount',
      },
      {
        label: 'No of person who need Accommodation',
        fieldName: 'organiserCount',
      },
    ],
  },
];

const formName = 'accomodation';

function AccomodationForm({
  prev,
  next,
}: {
  prev: () => void;
  next: () => void;
}) {
  const accomodation = useAppSelector(
    (state) => state.dataCollection.data.accomodation
  );
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(setAccomodation(values));
  };
  const onNext = () => {
    dispatch(setAccomodation(form.getFieldsValue()));
    next();
  };
  const onPrev = () => {
    dispatch(setAccomodation(form.getFieldsValue()));
    prev();
  };
  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="horizontal"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      form={form}
      initialValues={{ accomodation }}
      labelWrap
      labelAlign="left"
      className="main-form full-height"
      colon={false}
    >
      <div className="form-fields-container">
        <Flex gap="20px" vertical>
          <Collapse
            expandIconPosition="end"
            accordion
            expandIcon={({ isActive }) => (
              <CaretDownOutlined rotate={isActive ? 180 : 0} />
            )}
            items={[
              {
                key: `${formName}.hotelNights`,
                label: 'Hotel Nights',
                children: (
                  <AccomodationItems
                    formName={formName}
                    fieldName="accomodation"
                    items={accomodatonItems}
                  />
                ),
              },
            ]}
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
}

export default AccomodationForm;
