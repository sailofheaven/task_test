import { connect } from 'react-redux'
import TaskForm from '../components/task-form';
import * as actions from '../actions';

const mapStateToProps = state => ({
    task: state.currentTask
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (task) => {
        task.id
            ? dispatch(actions.editTask(task))
            : dispatch(actions.newTask(task))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm);