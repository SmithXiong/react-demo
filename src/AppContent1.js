/**
 * 功能描述：
 * 2018-04-11
 * 作者：Lenovo
 */
import React, { Component } from 'react';
import { Button, Table, Divider, Modal } from 'antd';
import AppInfo from "./AppInfo";
import { connect } from 'react-redux';
import { delete_Data } from './redux/action';

class AppContent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            visible: false,
            action: null,
            colData: null,
            data: [{
                key: '1',
                name: 'John Brown',
                sex: '0',
                age: 32,
                address: 'New York No. 1 Lake Park',
                birthday: '1991-01-01',
                email: '123@qq.com'
            }, {
                key: '2',
                name: 'Jim Green',
                sex: '1',
                age: 42,
                address: 'London No. 1 Lake Park',
                birthday: '1992-03-21',
                email: '432138753@qq.com'
            }, {
                key: '3',
                name: 'Joe Black',
                sex: '1',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                birthday: '1996-06-23',
                email: 'xx25415254@163.com'
            }, {
                key: '4',
                name: 'Disabled User',
                sex: '0',
                age: 99,
                address: 'Sidney No. 1 Lake Park',
                birthday: '1991-01-01',
                email: 'zz12341521@gmail.com'
            }]
        };
        this.columns = [{
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '性别',
            dataIndex: 'sex',
            render: text => text === '0' ? '男' : '女',
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '地址',
            dataIndex: 'address',
        }, {
            title: '出生日期',
            dataIndex: 'birthday',
        }, {
            title: '邮箱',
            dataIndex: 'email',
        }, {
            title: '操作',
            dataIndex: 'action',
            render: (text, record) => (
                <div>
                    <Button
                        type={'primary'}
                        onClick={() => {
                            this.setState({
                                visible: true,
                                action: 'edit',
                                colData: record
                            })
                        }}
                    >修改</Button>
                    <Button
                        style={{ marginLeft: '10px' }}
                        type={'default'}
                        onClick={() => {
                            this.setState({
                                visible: true,
                                action: 'read',
                                colData: record
                            })
                        }}
                    >查看</Button>
                </div>
            )
        }];
    }

    //新增行
    addLine = () => {
        this.setState({
            visible: true,
            action: 'new'
        })
    };

    //删除行
    deleteLine = () => {
        let selected = this.state.selectedRowKeys.length > 0;
        const { dispatch } = this.props;
        if (selected) {
            Modal.confirm({
                title: '提示',
                content: '确认要删除吗?',
                onOk: () => {
                    let select = this.state.selectedRowKeys;
                    let data = this.state.data;
                    select.forEach((selectItem) => {
                        /* let index = data.findIndex((item) => {
                            return item.key === selectItem;
                        });
                        data.splice(index, 1); */
                        dispatch(delete_Data(selectItem))
                    });
                    // this.setState({ data, selectedRowKeys: [] });
                },
                onCancel: () => { },
            });
        } else {
            Modal.warning({
                title: '警告',
                content: '请选择删除的数据！',
            });
        }
    };

    //表格选择
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    };

    render() {

        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange
        };

        return (
            <div>
                <AppInfo
                    visible={this.state.visible}
                    action={this.state.action}
                    colData={this.state.colData}
                    onOK={(item) => {
                        let data = this.state.data;
                        if (item.action === 'new') {
                            data.push({ ...item, 'key': (this.state.data.length + 1).toString() });
                        } else {
                            let index = data.findIndex((o) => {
                                return o.key === item.key;
                            });
                            data[index] = item;
                        }
                        this.setState({ data, visible: false, colData: null });
                    }}
                    onCancel={() => {
                        this.setState({
                            visible: false,
                            colData: null
                        })
                    }} />
                <div>
                    <Button type={'primary'} onClick={this.addLine} icon={'plus'}>新增</Button>
                    <Button type={'danger'} onClick={this.deleteLine} icon={'delete'}
                        style={{ marginLeft: '10px' }}>删除</Button>
                </div>
                <Divider />
                <div>
                    <Table dataSource={this.state.data} rowSelection={rowSelection} columns={this.columns} bordered />
                </div>
            </div>
        );
    }
}

export default connect()(AppContent1);
