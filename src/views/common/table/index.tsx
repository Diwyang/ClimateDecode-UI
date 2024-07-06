import { Button, Form, Popconfirm, Table, Typography } from 'antd';
import { useState } from 'react';
import CollectionCreateForm from './TransportInputModal';
import './editableTable.scss';
import EditableCell from './EditableCell';
import { Item } from '../../data-collection/types';

const EditableTable: React.FC<{
  formItems: Item[];
  data: any[];
  setData: (data: any[]) => void;
  addRow: (data: any, newData: any[]) => void;
  updateRow: (data: any, newData: any[]) => void;
}> = ({ formItems = [], data, setData, addRow, updateRow }) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [open, setOpen] = useState(false);

  const isEditing = (record: any) => record.key === editingKey;

  const edit = (record: any & { key: React.Key }) => {
    form.setFieldsValue(record);
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as any;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        const updatedRow = {
          ...item,
          ...row,
        };
        newData.splice(index, 1, updatedRow);
        updateRow(row, newData);
      } else {
        newData.push(row);
        addRow(row, newData);
      }
      setData(newData);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns: any[] = formItems.map((item) => ({
    title: item.label,
    dataIndex: item.fieldName,
    editable: true,
    inputType: item.type,
    options: item.options,
    rules: item.rules,
    dependencies: item.dependencies,
  }));

  columns.push({
    title: 'Operation',
    dataIndex: 'operation',
    render: (_: any, record: any) => {
      const editable = isEditing(record);
      return editable ? (
        <span>
          <Typography.Link
            onClick={() => save(record.key)}
            style={{ marginRight: 8 }}
          >
            Save
          </Typography.Link>
          <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
            <a>Cancel</a>
          </Popconfirm>
        </span>
      ) : (
        <Typography.Link
          disabled={editingKey !== ''}
          onClick={() => edit(record)}
        >
          Edit
        </Typography.Link>
      );
    },
  });

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        options: col.options,
        fixed: 'left',
        rules: col.rules,
        dependencies: col.dependencies,
      }),
    };
  });

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    const row = { key: `${data.length}`, ...values };
    const newData = [...data, row];
    setData(newData);
    setOpen(false);
    addRow(row, newData);
  };

  return (
    <div className="full-height padding-top-40">
      <div className="magin-top--40" style={{ height: '40px' }}>
        <Button
          className="right"
          onClick={() => {
            setOpen(true);
          }}
        >
          + Add Item
        </Button>
        <CollectionCreateForm
          open={open}
          onCreate={onCreate}
          formItems={formItems}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </div>
      <Form form={form} component={false}>
        <Table
          scroll={{ y: 'calc(100% - 40px)', x: 500 }}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          className="full-height fixed-header-table"
          sticky={true}
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
          tableLayout="fixed"
        />
      </Form>
    </div>
  );
};

export default EditableTable;
