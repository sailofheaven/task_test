import * as actions from '../src/actions';
import * as C from '../src/constants/types'

describe('>>>A C T I O N --- Test Actions', () => {
    it('+++ actionCreator newTask', () => {
        const add = actions.newTask({ title: "title" });
        expect(add).toEqual({ type: C.NEW_TASK, title: "title" });
    });

});

  //*******************************************************************************************************