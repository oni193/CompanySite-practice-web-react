import React from 'react';
import ReactDOM from 'react-dom';

const ModalStyle={
    position: 'absolute',
    top: '500px',
    width: '100%',
    height: '300px',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: 'white',
};

const Modal = ({ isShowing, hide, text }) => isShowing ? ReactDOM.createPortal(
  <>
  
    <div className="modal-wrapper" >
      <div className="modal">
        {/* Modal 창 내용 */}
        <div style={ModalStyle}>
            <button type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
            </button> 
            {text} 
            </div>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;

// aria-modal aria-hidden tabIndex={-1} role="dialog"