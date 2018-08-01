import React from 'react';
import uuid from 'uuid';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css';

const options = ['normal', 'high', 'critical']

export default class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        const task = props.task || {};
        this.state = {
            id: task.id || -uuid.v4(),
            title: task.title || '',
            content: task.content || '',
            priority: task.priority || 'normal',
            dead_line: moment(task.dead_line) || null,
            complete: task.complete || null
        }
    }

    handleInput(event) {
        const newState = {};
        const inputId = event.currentTarget.getAttribute('id');
        newState[inputId] = event.currentTarget.value;
        this.setState(newState);
    }

    handleSubmit(e) {
        const { props } = this;
        e && e.preventDefault()
        if (typeof props.onSubmit === 'function') {
            props.onSubmit(Object.assign({}, this.state));
        }

        if (typeof props.afterSubmit === 'function') props.afterSubmit()
    }

    render() {
        const { state } = this;

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div >
                    <div className="field-group">
                        <label htmlFor="title" className="label">Title:</label>
                        <div className="field">
                            <input name="title" id="title" type="text" value={state.title} onChange={e => this.handleInput(e)} required />
                        </div>
                    </div>
                    <div className="field-group">
                        <label htmlFor="priority" className="label">Priority:</label>
                        <div className="field">
                            <select id="priority" value={state.priority} onChange={e => this.handleInput(e)} className="input__field">
                                {options.map(option => {
                                    return <option value={option} key={option} >{option}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="field-group">
                        <label htmlFor="dead_line" className="label">Dead line:</label>
                        <div className="field">
                            <DatePicker
                                id="dead_line"
                                selected={state.dead_line}
                                onChange={date => this.setState({ dead_line: date })}
                            />
                        </div>
                    </div>

                    <div className="field-group">
                        <label htmlFor="content" className="label">Content:</label>
                        <div className="field">
                            <textarea id="content" name="textarea1" rows="10" cols="50" value={state.content} onChange={e => this.handleInput(e)} />
                        </div>
                    </div>
                </div>
                <input className="button" type="submit" value="Сохранить" />
            </form>
        )
    }
}

TaskForm.propTypes = {
    task: PropTypes.object
}