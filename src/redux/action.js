export const showModal = () => ({
    type: 'showModal',
})
export const hideModal = () => ({
    type: 'hideModal',
})
export const delete_Data = keys => ({
    type: 'delete',
    keys,
})
export const change_Select = (selected) => ({
    type: 'select',
    selected,
})
export const add_Data = (value) => ({
    type: 'add_Data',
    value,
})