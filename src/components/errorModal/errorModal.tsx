// ErrorModal.tsx
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import products from '../../data/products.json';
import { ErrorDescriptions } from './ErrorEnum';

interface ErrorModalProps {
  show: boolean;
  error: string | null;
  onHide: () => void;
  loadFromJson: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ show, error, onHide, loadFromJson }) => {
    const errorDescription = ErrorDescriptions[error as keyof typeof ErrorDescriptions] || "Unknown Error";

  
  const handleJsonLoad = () => {
    loadFromJson();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{errorDescription}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Oops! Looks like something went wrong. Would you like to load the data from the internal JSON file?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {error === 'Timeout Error' && (
          <Button variant="primary" onClick={handleJsonLoad}>
            Load from JSON
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
