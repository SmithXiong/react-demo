/**
 * 功能描述：
 * 2018-04-12
 * 作者：Lenovo
 */
import React, {Component} from 'react';
import {Form,Input,InputNumber,DatePicker,AutoComplete,Radio} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = AutoComplete.Option;

const AppForm = Form.create({
    mapPropsToFields(props) {
        return {
            name: Form.createFormField({
                value: props.name,
            }),
            sex: Form.createFormField({
                value: props.sex || '0',
            }),
            age: Form.createFormField({
                value: props.age,
            }),
            address: Form.createFormField({
                value: props.address,
            }),
            birthday: Form.createFormField({
                value: props.birthday ? moment(props.birthday) : null,
            }),
            email: Form.createFormField({
                value: props.email,
            }),

        };
    },
})(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                result: [],
            };
        }

        handleSearch = (value) => {
            let result;
            if (!value || value.indexOf('@') >= 0) {
                result = [];
            } else {
                result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
            }
            this.setState({ result });
        };

        render() {
            const { getFieldDecorator } = this.props.form;
            const formItemLayout = {
                labelCol: { span: 6 },
                wrapperCol: { span: 14 },
            };
            const children = this.state.result.map((email) => {
                return <Option key={email}>{email}</Option>;
            });
            return (
                <Form disabled>
                    <FormItem
                        label="姓名"
                        {...formItemLayout}
                        hasFeedback
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入姓名!' }],
                        })(
                            <Input disabled={!this.props.editable}/>
                        )}
                    </FormItem>
                    <FormItem
                        label="性别"
                        {...formItemLayout}
                    >
                        {getFieldDecorator('sex', { initialValue:'0'})(
                            <RadioGroup disabled={!this.props.editable}>
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
                            <InputNumber min={1} disabled={!this.props.editable}/>
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
                            <Input disabled={!this.props.editable}/>
                        )}
                    </FormItem>
                    <FormItem
                        label="出生日期"
                        {...formItemLayout}
                        hasFeedback
                    >
                        {getFieldDecorator('birthday', {
                            rules: [{required: true, message: '请选择出生日期!' }],
                        })(
                            <DatePicker disabled={!this.props.editable}/>
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
                            <AutoComplete onSearch={this.handleSearch}
                                          disabled={!this.props.editable}>
                                {children}
                            </AutoComplete>
                        )}
                    </FormItem>
                </Form>
            );
        }
    }
);

export default AppForm;