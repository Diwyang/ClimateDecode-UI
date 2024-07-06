import { Form, Input, InputNumber, Select } from 'antd';
import { EditableCellProps } from './types';

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  inputType,
  options,
  children,
  rules,
  dependencies,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={rules}
          dependencies={dependencies}
        >
          {(() => {
            if (inputType === 'select') {
              return <Select options={options} style={{ width: '100%' }} />;
            } else if (inputType === 'number') {
              return <InputNumber style={{ width: '100%' }} />;
            }
            return <Input />;
          })()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
