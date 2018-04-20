import { combineReducers } from 'redux'

const initialState = {
    action: null,
    visible: false,
    selectedRowKeys: [],
    formData: {},
    currentForm: {},
    result: [],
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
}

const tableData = (state = initialState, action) => {
    switch (action.type) {
        case 'showModal':
            return { ...state, visible: true, action: 'new' }
        case 'hideModal':
            return { ...state, visible: false, currentForm: {} }
        case 'select':
            return { ...state, selectedRowKeys: action.selected }
        case 'delete':
            return { ...state, data: state.data.filter((o) => o.key !== action.keys), selectedRowKeys: [] }
        case 'add_Data':
            let data = state.data;
            if (state.action === 'new') {
                data.push({ ...action.value, 'key': (state.data.length + 1).toString() });
            } else {
                let index = data.findIndex((o) => {
                    return o.key === action.value.key;
                });
                data[index] = action.value;
            }
            return { ...state, data, visible: false }
        default:
            return state
    }
}

const formData = (state = initialState.formData, action) => {
    switch (action.type) {
        case 'handleSearch':
            let result;
            if (!action.value || action.value.indexOf('@') >= 0) {
                result = [];
            } else {
                result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${action.value}@${domain}`);
            }
            return { ...state, result }
        default:
            return state
    }
}

export default tableData