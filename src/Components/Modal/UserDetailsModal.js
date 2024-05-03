// ReusableModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const UserDetailsModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
      {children}
    </Modal>
  );
};

export default UserDetailsModal;
