import { Flex, Collapse, Button, Form } from 'antd';
import DayListForm from '../venue/DayListFormWithComments';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setMarketing } from '../../../../containers/data-collection/slice';
import { validateMessages } from '../../../utlils/mesage';
import { Item } from '../../types';

const items: Item[][] = [
  [
    {
      label: 'Currency Used',
      fieldName: 'currency',
      type: 'select',
      options: [
        {
          label: '₹',
          value: 'INR',
        },
        {
          label: 'US$',
          value: 'USD',
        },
      ],
    },
    {
      label: 'Amount spent for stationery (in the chosen currency)',
      fieldName: 'stationeryCost',
    },
    {
      label: 'Amount spent for telecommunication (in the chosen currency)',
      fieldName: 'telecommunicationCost',
    },
    {
      label:
        'Amount spent for printing and publishing services (in the chosen currency)',
      fieldName: 'printingCost',
    },
    {
      label: 'Amount spent for web hosting (in the chosen currency)',
      fieldName: 'webHostingCost',
    },
  ],
  [
    {
      label: 'Comments',
      fieldName: 'comment',
      type: 'textarea',
    },
  ],
];

function MarketingForm({ prev, next }: { prev: () => void; next: () => void }) {
  const formName = 'marketing';
  const marketing = useAppSelector(
    (state) => state.dataCollection.data.marketing
  );
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(setMarketing(values));
  };
  const onNext = () => {
    dispatch(setMarketing(form.getFieldsValue()));
    next();
  };
  const onPrev = () => {
    dispatch(setMarketing(form.getFieldsValue()));
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
      initialValues={{ marketing }}
      labelWrap
      labelAlign="left"
      className="main-form full-height"
      colon={false}
    >
      <div className="form-fields-container">
        <Flex gap="20px" vertical>
          <Collapse
            items={[
              {
                key: `${formName}.marketing`,
                label: 'Marketing',
                children: (
                  <DayListForm
                    formName={formName}
                    fieldName="items"
                    items={items}
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

export default MarketingForm;
