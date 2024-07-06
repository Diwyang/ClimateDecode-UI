import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Form, Input, InputNumber, Select } from 'antd';
import { v4 } from 'uuid';
import { Item } from '../../types';

const DayListForm = ({
  formName,
  fieldName,
  items = [],
}: {
  formName: string;
  fieldName: string;
  items: Item[][];
}) => {
  return (
    <Form.List name={[formName, fieldName]}>
      {(fields, { add, remove }) => (
        <div
          style={{
            display: 'flex',
            rowGap: 16,
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div>
            <Button type="primary" onClick={() => add()} className="right">
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
                    if (field.name == fields.length - 1) {
                      remove(field.name);
                    }
                  }}
                />
              }
            >
              <Flex gap="60px">
                {items.map((itemArr) => {
                  return (
                    <div style={{ width: '50%' }} key={v4()}>
                      {itemArr.map((item) => (
                        <Form.Item
                          name={[field.name, item.fieldName]}
                          rules={item.rules}
                          label={item.label}
                          key={v4()}
                        >
                          {(() => {
                            if (item.type === 'select') {
                              return <Select options={item.options} />;
                            } else if (item.type === 'number') {
                              return (
                                <InputNumber
                                  suffix={item.suffix}
                                  style={{ width: '100%' }}
                                  formatter={item.formatter}
                                  parser={item.parser}
                                />
                              );
                            } else if (item.type === 'textarea') {
                              return (
                                <Input.TextArea style={{ width: '100%' }} />
                              );
                            }
                            return <Input suffix={item.suffix} />;
                          })()}
                        </Form.Item>
                      ))}
                    </div>
                  );
                })}
              </Flex>
            </Card>
          ))}
        </div>
      )}
    </Form.List>
  );
};

export default DayListForm;
