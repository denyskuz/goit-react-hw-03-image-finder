import { Component } from 'react'
import { func, node } from 'prop-types';
import classes from './Modal.module.css'

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    static propsTypes = { 
        onClose: func.isRequired,
        children: node.isRequired
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleClose = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    
    render() {
        const { children } = this.props;
        return createPortal(
            <div onClick={this.handleClose} className={classes.root}>
                <div className={classes.modal}>
                    {children}
                </div>
            </div>,
            modalRoot,
        )
    }
};

export default Modal;