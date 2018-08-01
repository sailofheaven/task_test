import { OPEN_MODAL, CLOSE_MODAL } from '../constants/types'


const modal = (state = [], action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return state.concat(action.obj)
				;
		case CLOSE_MODAL:
			return state.filter(item => item.id !== action.id)

		default:
			return state;
	}
};

export default modal;