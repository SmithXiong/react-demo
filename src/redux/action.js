export const add_Data = () => ({
    type: 'add',
})
export const delete_Data = keys => ({
    type: 'delete',
    keys,
})
export const change_Select = (selected) => ({
    type: 'select',
    selected,
})