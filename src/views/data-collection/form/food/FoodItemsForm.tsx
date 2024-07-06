import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Form } from 'antd';
import { Item } from '../../types';
import EditableTable from '../../../common/table';

const defaultItsmes = {
  breakfast: '',
  lunch: '',
  dinner: '',
  buffet: '',
  drinks: '',
  snacks: '',
  fruits: '',
  wine: '',
  beer: '',
  tea: '',
  vegMeals: '',
  foodTrucks: '',
};

// const FoodItem = ({ field, item }: { field: any; item: Item }) => (
//   <>
//     <Form.Item
//       name={[field.name, item.fieldName]}
//       rules={item.rules}
//       label={item.label}
//       key={v4()}
//     >
//       {(() => {
//         if (item.type === 'select') {
//           return <Select options={item.options} />;
//         } else if (item.type === 'number') {
//           return (
//             <InputNumber
//               suffix={item.suffix}
//               style={{ width: '100%' }}
//               formatter={item.formatter}
//               parser={item.parser}
//               placeholder="No of meals/drinks/serving"
//             />
//           );
//         } else if (item.type === 'textarea') {
//           return <Input.TextArea style={{ width: '100%' }} />;
//         }
//         return <Input suffix={item.suffix} />;
//       })()}
//     </Form.Item>
//   </>
// );

const FoodItemsForm = ({
  formName,
  fieldName,
  items = [],
  addItem,
}: {
  formName: string;
  fieldName: string;
  items: Item[];
  addItem: (item: Item) => void;
}) => {
  const [, setOpen] = useState(false);
  const [data, setData] = useState<any>({});

  const setDataList = (fieldKey: number, newData: any[]) => {
    setData({
      ...data,
      [fieldKey]: newData,
    });
  };
  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    addItem({
      fieldName: values.name,
      label: values.title,
      type: 'number',
    });
    setOpen(false);
  };
  return (
    <Form.List name={[formName, fieldName]}>
      {(fields, { add, remove }) => (
        <Flex vertical gap="16px" className="full-width">
          <div>
            <Button
              type="primary"
              onClick={() => add(defaultItsmes)}
              className="right"
            >
              + Add Day
            </Button>
          </div>
          {fields.map((field) => (
            <Card
              title={`Day ${field.name + 1}`}
              key={field.key}
              bordered={false}
              extra={
                <CloseOutlined
                  onClick={() => {
                    remove(field.name);
                  }}
                />
              }
            >
              <Flex gap="50px">
                <div className="form-fields-container no-overflow">
                  <Flex gap="20px" vertical className="full-height">
                    <EditableTable
                      formItems={items}
                      data={data[field.key] || []}
                      setData={(newData) => setDataList(field.key, newData)}
                      addRow={onCreate}
                      updateRow={onCreate}
                    />
                  </Flex>
                </div>
              </Flex>
            </Card>
          ))}
        </Flex>
      )}
    </Form.List>
  );
};

export default FoodItemsForm;
