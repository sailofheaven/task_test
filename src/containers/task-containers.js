import { connect } from 'react-redux'
import TaskList from '../components/task-list';
import { FILTER_TASK } from '../constants/types';
import * as actions from '../actions';
import { openModal, closeModal } from '../actions/modal-action'

const filterTasks = (tasks, filter) => {
    switch (filter) {
        case FILTER_TASK.ALL:
            return tasks
        case FILTER_TASK.NORMAL:
            return tasks.filter(t => t.priority == 'normal')
        case FILTER_TASK.HIGH:
            return tasks.filter(t => t.priority == 'high')
        case FILTER_TASK.CRTITCAL:
            return tasks.filter(t => t.priority == 'critical')
    }
}

const mapStateToProps = state => ({
    tasks: filterTasks(state.tasks, state.filter)
});

const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(actions.newTask(task)),
    editTask: task => dispatch(actions.editTask(task)),
    selectTask: task => dispatch(actions.selectTask(task)),
    clearSelect: () => dispatch(actions.deselectTask()),
    openModal: obj => dispatch(openModal(obj)),
    closeModal: obj => dispatch(closeModal(obj)),
    onDelete: id => dispatch(actions.removeTask(id)),
    onComplete: id => dispatch(actions.setComplete(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);