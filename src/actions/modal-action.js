import * as C from '../constants/types';

export const openModal = (obj) => {
	return {
		type: C.OPEN_MODAL,
		obj,
	}
}
export const closeModal = (id) => {
	return {
		type: C.CLOSE_MODAL,
		id,
	}
}