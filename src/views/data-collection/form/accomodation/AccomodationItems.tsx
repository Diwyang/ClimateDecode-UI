import { CloseOutlined, DeleteFilled } from '@ant-design/icons';
import { Button, Card, Flex, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';

interface Fields {
  label: string;
  fieldName: string;
}

interface Item {
  label: string;
  fields: Fields[];
}

const FoodItemsForm = ({
  formName,
  fieldName,
  items = [],
}: {
  formName: string;
  fieldName: string;
  items: Item[];
}) => {
  return (
    <Form.List name={[formName, fieldName]}>
      {(fields, { add, remove }) => (
        <Flex vertical gap="16px" className="full-width">
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
                    if (fields.length === field.name + 1) {
                      remove(field.name);
                    }
                  }}
                />
              }
            >
              <Flex vertical>
                <div className="padding-bottom-20">
                  <Form.List name={[field.name, fieldName]}>
                    {(subFields, subOpt) => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: 16,
                        }}
                      >
                        {subFields.map((subField) => (
                          <>
                            <div>
                              <DeleteFilled
                                style={{ float: 'right' }}
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </div>
                            {items.map((item) => {
                              const spancount = 100 / (item.fields.length + 1);
                              return (
                                <Flex key={uuidv4()} gap="40px">
                                  <div style={{ width: `${spancount}%` }}>
                                    {item.label}
                                  </div>
                                  {item.fields.map((fieldItem) => (
                                    <div
                                      style={{ width: `${spancount}%` }}
                                      key={uuidv4()}
                                    >
                                      <Form.Item
                                        name={[
                                          subField.name,
                                          fieldItem.fieldName,
                                        ]}
                                      >
                                        <Input placeholder={fieldItem.label} />
                                      </Form.Item>
                                    </div>
                                  ))}
                                </Flex>
                              );
                            })}
                          </>
                        ))}
                        <Button
                          type="dashed"
                          onClick={() => subOpt.add()}
                          block
                        >
                          + Add Sub Item
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </div>
                <Form.Item label="Comments" name={[field.name, 'comments']}>
                  <Input.TextArea size="large" />
                </Form.Item>
              </Flex>
            </Card>
          ))}
        </Flex>
      )}
    </Form.List>
  );
};

export default FoodItemsForm;
