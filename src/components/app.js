import React from 'react';
import TaskContainers from '../containers/task-containers';
import ModalContainer from '../containers/modal-containers'
import TopPanel from './top-panel';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <div className="page">
                    <TopPanel />
                    <TaskContainers />
                </div>
                
                <ModalContainer />
            </div>
        )
    }
}