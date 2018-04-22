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
export const edit_Data = (value) => ({
    type: 'edit_Data',
    value,
})
export const read_Data = (value) => ({
    type: 'read_Data',
    value,
})
/* export const handleSearch = (value) => ({
    type: 'handleSearch',
    value,
}) */