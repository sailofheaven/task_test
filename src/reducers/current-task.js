import * as C from '../constants/types'

const task = (state = null, action) => {
    switch (action.type) {
        case C.SELECT_TASK:
            return action.task;
        case C.DESELECT_TASK:
            return null;
        default: return state;
    }
}

export default task;