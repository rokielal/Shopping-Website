import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.css';

const Modal = ({children, closeModal}) => {
  return createPortal(
    <>
        <div className="backdrop" onClick={closeModal}></div>
        <div className="content"> {children}</div>
    </>, 
    document.getElementById('modal')
  );
}

export default Modal;