import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import PropTypes from 'prop-types';
import FormContainers from './form-container'
import { selectTask, deselectTask } from '../actions'
import * as modalActions from '../actions/modal-action'

const TaskButton = ({ isnew, onClick, className }) => {
    let title = isnew ? 'add' : 'edit';


    return (
        <div className={className + " button-wrapper"}>
            <button className="button" onClick={onClick}>{title}</button>
        </div>
    )
}

TaskButton.propTypes = {
    isnew: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export {TaskButton}

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => {

        const { task } = props;
        const modalID = uuid.v4();

        if (task) { dispatch(selectTask(task)) } else { dispatch(deselectTask()) }

        dispatch(
            modalActions.openModal({
                id: modalID,
                content: <FormContainers task={props.task} afterSubmit={() => dispatch(modalActions.closeModal(modalID))} />
            })
        )
    }
})


export default connect(
    null,
    mapDispatchToProps
)(TaskButton);