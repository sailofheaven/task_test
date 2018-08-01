import React from 'react'
import Modal from './modal'
import PropTypes from 'prop-types'

export default class Modals extends React.Component {
    render() {
        const modals = this.props.modals.map((item, i) => <Modal item={item} key={i} zIndex={i} onClose={(item) => this.props.closeModal(item.id)} />)
        return (
            <div className="modals" style={{ display: this.props.modals.length ? '' : 'none' }}>
                {modals}
            </div>
        );
    }
}

Modals.propTypes = {
    modals: PropTypes.array.isRequired,
    closeModal: PropTypes.func
}