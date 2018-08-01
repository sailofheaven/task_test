import * as C from '../constants/types';

export const newTask = task => ({
    type: C.NEW_TASK,
    ...task
});

export const removeTask = id => ({
    type: C.REMOVE_TASK,
    id
});

export const selectTask = task => ({
    type: C.SELECT_TASK,
    task
});

export const deselectTask = () => ({
    type: C.DESELECT_TASK
});

export const editTask = task => ({
    type: C.EDIT_TASK,
    ...task
});

export const setComplete = id => ({
    type: C.SET_COMPLETE,
    id
});

export const setFilter = filter => ({
    type: C.SET_FILTER,
    filter
})

export const openModalForm = dispatch => {
    dispatch(C.OPEN_MODAL);
}