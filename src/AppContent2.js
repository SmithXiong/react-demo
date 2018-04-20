/**
 * 功能描述：
 * 2018-04-11
 * 作者：Lenovo
 */
import React, { Component } from 'react';
import { Button, Table, Divider, Modal, Spin } from 'antd';
import PropTypes from 'prop-types';
import AppInfo from "./AppInfo2";
import { connect } from 'react-redux';
import { delete_Data, showModal, change_Select } from './redux/action';



const columns = [{
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
            {/* <Button
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
                >查看</Button> */}
        </div>
    )
}];



const AppContent2 = ({ tableData, showModal, delete_Data, change_Select }) => {
    //删除行
    const deleteLine = () => {
        let selected = tableData.selectedRowKeys.length > 0;
        if (selected) {
            Modal.confirm({
                title: '提示',
                content: '确认要删除吗?',
                onOk: () => {
                    let select = tableData.selectedRowKeys;
                    select.forEach((selectItem) => {
                        /* let index = data.findIndex((item) => {
                            return item.key === selectItem;
                        });
                        data.splice(index, 1); */
                        delete_Data(selectItem)
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
    }

    //表格选择
    const rowSelection = {
        selectedRowKeys: tableData.selectedRowKeys,
        onChange: (selectedRowKeys) => {
            change_Select(selectedRowKeys);
        }
    }

    return (
        <div>
            <AppInfo />
            <div>
                <Button type={'primary'} onClick={showModal} icon={'plus'}>新增</Button>
                <Button type={'danger'} onClick={() => deleteLine()} icon={'delete'}
                    style={{ marginLeft: '10px' }}>删除</Button>
            </div>
            <Divider />
            <div>
                <Table dataSource={tableData.data} rowSelection={rowSelection} columns={columns} bordered />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    tableData: state
})

const mapDispatchToProps = dispatch => ({
    showModal: () => dispatch(showModal()),
    delete_Data: id => dispatch(delete_Data(id)),
    change_Select: selected => dispatch(change_Select(selected)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContent2);