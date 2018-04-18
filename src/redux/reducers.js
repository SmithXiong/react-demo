const initialState = {
    loading: true,
    selectedRowKeys: [],
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
        case 'request':
            return { ...state, loading: false }
        case 'select':
            return { ...state, selectedRowKeys: action.selected }
        case 'delete':
            return { ...state, data: state.data.filter((o) => o !== state.data[action.keys]), selectedRowKeys: [] }
        default:
            return state
    }
}
export default tableData