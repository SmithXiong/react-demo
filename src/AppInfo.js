/**
 * 功能描述：
 * 2018-04-12
 * 作者：Lenovo
 */
import React, { Component } from 'react';
import { Modal } from 'antd';
import AppForm from './AppForm';

const dateFormat = 'YYYY-MM-DD';

class AppInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        };
        this.formRef = null;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props !== nextProps) {
            this.setState({
                visible: nextProps.visible,
                action: nextProps.action,
                colData: nextProps.colData
            })
        }
    }

    _onOK = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (!err) {
                const data = {
                    ...values,
                    'birthday': values['birthday'].format(dateFormat),
                    'action': this.props.action,
                    'key': this.props.colData ? this.props.colData.key : null
                };
                this.setState({
                    visible: false
                });
                this.props.onOK(data);
            }
        });
    };

    _onCancel = () => {
        this.setState({
            visible: false
        });
        this.props.onCancel();
    };

    render() {
        return (
            <div>
                <Modal onOk={this._onOK} onCancel={this._onCancel} okText={'确定'} cancelText={'取消'} visible={this.props.visible} title={this.props.action === 'new' ? '新增' : this.props.action === 'edit' ? '修改' : '查看'} destroyOnClose>
                    <AppForm wrappedComponentRef={el => this.formRef = el} {...this.props.colData} editable={this.props.action !== 'read'} />
                </Modal>
            </div>
        );
    }
}

export default AppInfo;
