import React from 'react'
import Task from './task'
import PropTypes from 'prop-types';

export default class TaskList extends React.Component {

    render() {
        const { tasks, onDelete, onComplete } = this.props;
        return (
            <div className="panel">
                <ul className="tabs">
                    {tasks.map(task =>
                        <Task task={task} key={task.id} onDelete={() => onDelete(task.id)} onComplete={() => onComplete(task.id)} />
                    )}
                </ul>
            </div>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func
}