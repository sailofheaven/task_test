import React from 'react';

export default class Modal extends React.Component {
    onClose() {
        if (this.props.item.onClose) {
            this.props.item.onClose();
            this.props.onClose(this.props.item);
        } else {
            this.props.onClose(this.props.item);
        }
    }

    render() {
        const { zIndex } = this.props;
        const { content } = this.props.item;

        return (
            <div className="modal-wrapper" style={{ zIndex: (zIndex + 1) * 10 }}>
                <div className="modal">
                    <button className="close" onClick={() => this.onClose()}>&times;</button>
                    {content}
                </div>
            </div>
        )

    }
}