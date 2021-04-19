import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import st from './Modal.module.css';
import ContactForm from '../ContactForm/ContactForm';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={st.Overlay} onClick={handleBackdropClick}>
      <div className={st.modal}>
        <ContactForm onClose={onClose} />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
