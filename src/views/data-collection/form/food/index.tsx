import { useState } from 'react';
import { Form, Flex, Collapse, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import FoodItemsForm from './FoodItemsForm';
import { validateMessages } from '../../../utlils/mesage';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setFood } from '../../../../containers/data-collection/slice';
import { Item } from '../../types';

const foodItems: Item[] = [
  {
    label: 'Breakfast',
    fieldName: 'breakfast',
    type: 'number',
  },
  {
    label: 'Lunch',
    fieldName: 'lunch',
    type: 'number',
  },
  {
    label: 'Dinner (1-course)',
    fieldName: 'dinner',
    type: 'number',
  },
  {
    label: 'Buffet (or 3-course dinner)',
    fieldName: 'buffet',
    type: 'number',
  },
  {
    label: 'Drinks and canapes',
    fieldName: 'drinks',
    type: 'number',
  },
  {
    label: 'Sancks',
    fieldName: 'snacks',
    type: 'number',
  },
  {
    label: 'Fruits',
    fieldName: 'fruits',
    type: 'number',
  },
  {
    label: 'Wine',
    fieldName: 'wine',
    type: 'number',
  },
  {
    label: 'Beer',
    fieldName: 'beer',
    type: 'number',
  },
  {
    label: 'Tea/Coffee breaks',
    fieldName: 'tea',
    type: 'number',
  },
  {
    label: 'Percentage of vegetarian meals',
    fieldName: 'vegMeals',
    type: 'number',
  },
  {
    label: 'Number of food trucks',
    fieldName: 'foodTrucks',
    type: 'number',
  },
];

const formName = 'food';

function FoodForm({ prev, next }: { prev: () => void; next: () => void }) {
  const [items, setItems] = useState<Item[]>(foodItems);

  const food = useAppSelector((state) => state.dataCollection.data.food) || [];
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch(setFood(values));
  };

  const onChange = () => {
    // dispatch(setFood(form.getFieldsValue()));
  };

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };
  const onNext = () => {
    dispatch(setFood(form.getFieldsValue()));
    next();
  };
  const onPrev = () => {
    dispatch(setFood(form.getFieldsValue()));
    prev();
  };
  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      onChange={onChange}
      validateMessages={validateMessages}
      layout="horizontal"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      form={form}
      initialValues={{ food }}
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
                key: `${formName}.mealsFormal`,
                label: 'Meals- Formal Part',
                children: (
                  <FoodItemsForm
                    formName={formName}
                    fieldName="mealsFormal"
                    items={items}
                    addItem={addItem}
                  />
                ),
              },
              {
                key: `${formName}.mealsCampusWarming`,
                label: 'Meals- Campus Warming',
                children: (
                  <Form.Item name={[formName, 'mealsCampusWarming']}>
                    <FoodItemsForm
                      formName={formName}
                      fieldName="mealsCampusWarming"
                      items={foodItems}
                      addItem={addItem}
                    />
                  </Form.Item>
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

export default FoodForm;
