import React from 'react';
import TaskButton from '../containers/task-button';
import moment from 'moment'
import PropTypes from 'prop-types'

export default class Task extends React.Component {

    render() {
        const { task, onDelete, onComplete } = this.props;

        const dead_line = task.dead_line ? moment(task.dead_line).format('l') : null;
        const complete = task.complete ? moment(task.complete).format('l') : null;

        let className = 'card';
        className += (dead_line && moment(task.dead_line).diff(moment(task.complete || undefined), 'days') < 0) ? ' task-dead' : '';


        return <li className={className}>
            <div className="card-wrap">
                <div className="card-title">
                    {task.title}
                </div>
                <div className="card-content">
                    {task.content}
                </div>
                <div className="card-foot">
                    <div className="complete-date">{complete}</div>
                    <div className="deadline">{dead_line}</div>
                </div>
            </div>
            <ul className="card-buttons">
                <TaskButton task={this.props.task} />
                <button className="button delete_button" onClick={onDelete}>×</button>
                {
                    complete === null
                        ? <button className="button complete_button" onClick={onComplete}>✓</button>
                        : null
                }

            </ul>
        </li>
    }
}

Task.propTypes = {
    task: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func
}
