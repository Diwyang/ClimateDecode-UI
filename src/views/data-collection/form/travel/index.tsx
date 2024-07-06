import { Form, Input, Row, Col, Typography, Flex, Button } from 'antd';
import { v4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setTravel } from '../../../../containers/data-collection/slice';
import { validateMessages } from '../../../utlils/mesage';

const formItems = [
  {
    title: 'Local',
    description: 'Ground travel from nearby areas',
    fieldName: 'local',
    placeholder: '% of attendees and organisers travelling',
  },
  {
    title: 'Short Distance',
    description: 'Ground, Up to 463 Km distance',
    fieldName: 'groundShortDistance',
    placeholder: '% of attendees and organisers travelling',
  },
  {
    title: 'Short Distance',
    description: 'Air, Up to 463 Km distance',
    fieldName: 'airShortDistance',
    placeholder: '% of attendees and organisers travelling',
  },
  {
    title: 'Middle Distance',
    description: 'Air, 463-3700 Km distance',
    fieldName: 'airMiddleDistance',
    placeholder: '% of attendees and organisers travelling',
  },
  {
    title: 'Long Distance',
    description: 'Air, more than 3700 Km distance',
    fieldName: 'airLongDistance',
    placeholder: '% of attendees and organisers travelling',
  },
];

const formName = 'travel';

function TravelForm({ prev, next }: { prev: () => void; next: () => void }) {
  const venue = useAppSelector((state) => state.dataCollection.data.venue);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(setTravel(values));
  };
  const onNext = () => {
    dispatch(setTravel(form.getFieldsValue()));
    next();
  };
  const onPrev = () => {
    dispatch(setTravel(form.getFieldsValue()));
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
      initialValues={{ venue }}
      labelWrap
      labelAlign="left"
      className="main-form full-height"
      colon={false}
    >
      <div className="form-fields-container">
        {formItems.map((item) => (
          <Row key={v4()} className="padding-bottom-20">
            <Col span={8}>
              <Typography.Title level={3} className="no-margin">
                {item.title}
              </Typography.Title>
            </Col>
            <Col span={8}>
              <Typography.Title level={5} className="no-margin">
                {item.description}
              </Typography.Title>
            </Col>
            <Col span={8}>
              <Form.Item
                name={[formName, item.fieldName]}
                className="no-margin"
              >
                <Input placeholder={item.placeholder} />
              </Form.Item>
            </Col>
          </Row>
        ))}
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

export default TravelForm;
