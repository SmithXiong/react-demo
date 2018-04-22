/**
 * 功能描述：
 * 2018-04-12
 * 作者：Lenovo
 */
import React from 'react';
import { Button, Modal, Form, Input, InputNumber, DatePicker, Radio } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { hideModal, add_Data } from './redux/action';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const dateFormat = 'YYYY-MM-DD';

const AppInfo = ({
    tableData,
    hideModal,
    add_Data,
    form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue,
    }
}) => {
    const handleOk = () => {
        validateFields((err, values) => {
            if (!err) {
                const data = {
                    ...values,
                    'birthday': values['birthday'].format(dateFormat),
                    'action': tableData.action,
                    'key': tableData.currentForm ? tableData.currentForm.key : null
                };
                add_Data(data)
            }
        })
    }

    const modalOpts = {
        title: tableData.action === 'new' ? '新增' : tableData.action === 'edit' ? '修改' : '查看',
        visible: tableData.visible,
        onCancel: hideModal,
        onOk: handleOk,
        destroyOnClose: true,
        footer: tableData.action === 'read' ? null : [
            <Button key="back" onClick={hideModal}>Return</Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
                Submit
            </Button>,
        ]
    }

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };

    return (
        <div>
            <Modal {...modalOpts}>
                <Form>
                    <FormItem
                        label="姓名"
                        {...formItemLayout}
                        hasFeedback
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入姓名!' }],
                        })(
                            <Input disabled={tableData.action === 'read'} />
                        )}
                    </FormItem>
                    <FormItem
                        label="性别"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('sex', { initialValue: '0' })(
                            <RadioGroup disabled={tableData.action === 'read'}>
                                <Radio value="0">男</Radio>
                                <Radio value="1">女</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        label="年龄"
                        {...formItemLayout}
                        hasFeedback
                    >
                        {getFieldDecorator('age', {
                            rules: [{ required: true, message: '请输入年龄!' }],
                        })(
                            <InputNumber min={1} disabled={tableData.action === 'read'} />
                        )}
                    </FormItem>
                    <FormItem
                        label="地址"
                        {...formItemLayout}
                        hasFeedback
                    >
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: '请输入地址!' }],
                        })(
                            <Input disabled={tableData.action === 'read'} />
                        )}
                    </FormItem>
                    <FormItem
                        label="出生日期"
                        {...formItemLayout}
                        hasFeedback
                    >
                        {getFieldDecorator('birthday', {
                            rules: [{ required: true, message: '请选择出生日期!' }],
                        })(
                            <DatePicker disabled={tableData.action === 'read'} />
                        )}
                    </FormItem>
                    <FormItem
                        label="邮箱"
                        {...formItemLayout}
                        hasFeedback
                    >
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: '请输入邮箱地址!' }],
                        })(
                            <Input disabled={tableData.action === 'read'} />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => ({
    tableData: state
})

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    add_Data: (value) => dispatch(add_Data(value)),
})

const mapPropsToFields = {
    mapPropsToFields(props) {
        return {
            name: Form.createFormField({
                value: props.tableData.currentForm.name,
            }),
            sex: Form.createFormField({
                value: props.tableData.currentForm.sex || '0',
            }),
            age: Form.createFormField({
                value: props.tableData.currentForm.age,
            }),
            address: Form.createFormField({
                value: props.tableData.currentForm.address,
            }),
            birthday: Form.createFormField({
                value: props.tableData.currentForm.birthday ? moment(props.tableData.currentForm.birthday) : null,
            }),
            email: Form.createFormField({
                value: props.tableData.currentForm.email,
            }),

        };
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create(mapPropsToFields)(AppInfo));
