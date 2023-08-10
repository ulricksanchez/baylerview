import React from 'react';
import Modal from 'react-modal';

export const SuccessModal = ({isOpen, closeModal}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Success Modal"
    >
      <h2>Record Submitted Successfully!</h2>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};
