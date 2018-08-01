import * as C from '../constants/types';
import moment from 'moment';
import uuid from 'uuid';
import { loadState, saveState } from '../utils/localStorage'

const defaultState = loadState('TASK', []);

const tasks = (state = defaultState, action) => {
    let modifityState = state;
    switch (action.type) {
        case C.NEW_TASK:
            modifityState = [
                ...state,
                {
                    id: uuid.v4(),
                    title: action.title,
                    content: action.content,
                    priority: action.priority,
                    dead_line: action.dead_line,
                    complete: null
                }
            ]
            break;
        case C.REMOVE_TASK:
            modifityState = state.filter(task => task.id !== action.id)
            break;
        case C.EDIT_TASK:
            modifityState = state.map(task =>
                task.id == action.id
                    ? {
                        ...task,
                        title: action.title,
                        content: action.content,
                        priority: action.priority,
                        dead_line: action.dead_line,
                        complete: action.complete
                    }
                    : task
            )
            break;
        case C.SET_COMPLETE:
            modifityState = state.map(task =>
                task.id == action.id
                    ? { ...task, complete: moment() }
                    : task
            )
            break
        default: return state;
    }

    saveState(modifityState, 'TASK')

    return modifityState
}

export default tasks;