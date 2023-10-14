import React, { useState } from 'react';
import { ErrorModal } from '../components/Index';
import { Container } from "react-bootstrap";


export function Home() {

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [currentError, setCurrentError] = useState<string | null>(null);

  const loadFromJson = () => {
    // Mocking the behavior for loading from JSON.
    // Implement the actual logic to load products from the local JSON file here.
    console.log("Loading data from local JSON file...");
  };

  const triggerError = (errorType: string) => {
    setCurrentError(errorType);
    setShowErrorModal(true);
  }

  return (
    <Container fluid className="base"> 
 <button onClick={() => triggerError("e408")}>Trigger Timeout Error</button>
<button onClick={() => triggerError("e404")}>Trigger 404 Error</button>
<button onClick={() => triggerError("Unknown Error")}>Trigger Unknown Error</button>
      <ErrorModal 
        show={showErrorModal} 
        error={currentError} 
        onHide={() => setShowErrorModal(false)} 
        loadFromJson={loadFromJson} 
      />
    </Container>
  )
}