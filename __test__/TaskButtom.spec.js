import ConnectTaskButton, { TaskButton } from '../src/containers/task-button'
import { configure } from 'enzyme';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

describe('ConnectTaskButton - test', () => {
    let wrapper
    const className = 'bestClass'

    beforeEach(() => {
        wrapper = shallow(<TaskButton className={className} />)

    })

    it('+++ render the DUMB component', () => expect(wrapper.length).toEqual(1));

    it('+++ contains class', () => expect(wrapper.prop('className')).toEqual(expect.stringContaining(className)));

});

describe('TaskButton - test', () => {
    const initialState = { output:100 };
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<ConnectTaskButton store={store} /> );
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1);
    });

});