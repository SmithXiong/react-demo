export const delete_Data = keys => ({
    type: 'delete',
    keys,
})
export const request_Data = () => ({
    type: 'request',
})
export const change_Select = (selected) => ({
    type: 'select',
    selected,
})