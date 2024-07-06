import React from 'react';
import { Form, Input, InputNumber, Modal, Select } from 'antd';
import { v4 } from 'uuid';
import { Item } from '../../data-collection/types';

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
  formItems: Item[];
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
  formItems,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Add New Item"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        labelAlign="left"
      >
        {formItems.map((item) => (
          <Form.Item
            name={item.fieldName}
            style={{ width: '100%' }}
            label={item.label}
            key={v4()}
          >
            {(() => {
              if (item.type === 'select') {
                return (
                  <Select options={item.options} style={{ width: '100%' }} />
                );
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
                return <Input.TextArea style={{ width: '100%' }} />;
              }
              return <Input suffix={item.suffix} />;
            })()}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;
