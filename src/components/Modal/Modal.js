import React from 'react';
import './Modal.css';

const Modal = ({ headerText, mainText, buttonText, isModalOpen, closeModal}) => {
    if(isModalOpen) {
        return (
            <div className='modal_overlay'>
                <div className='modal_container'>
                    <h1>{headerText}</h1>
                    <p>{mainText}</p>
                    <button onClick={closeModal}>{buttonText}</button>
                </div>
            </div>
        )
    }
    return '';
};

export default Modal;