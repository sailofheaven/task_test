import { combineReducers } from 'redux';
import tasks from './tasks';
import filter from './filter-task';
import currentTask from './current-task';
import modals from './modal-reducer'



export default combineReducers({
    filter,
    tasks,
    currentTask,
    modals
}) 