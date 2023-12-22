import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.documentElement.style.overflow = 'visible';
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalStyled>{children}</ModalStyled>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
