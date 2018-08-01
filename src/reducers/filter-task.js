import * as C from '../constants/types'

const tasks = (state = C.FILTER_TASK.ALL, action) => {
    switch (action.type) {
        case C.SET_FILTER:
            return action.filter;
        default: return state;
    }
}

export default tasks;