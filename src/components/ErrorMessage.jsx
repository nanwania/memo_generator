import React from 'react';

function ErrorMessage({ error }) {
  // We first create a consistent contact message that we'll use across all error types
  const contactMessage = "If you continue to experience issues, please email daniel@flybridge.com";

  // Handle cases where error is undefined or null
  if (!error) {
    return (
      <div className="error-message">
        <p>An unexpected error occurred.</p>
        <p>{contactMessage}</p>
      </div>
    );
  }

  const errorString = String(error);

  // Handle rate limit errors (429)
  if (errorString.includes("429") || errorString.toLowerCase().includes("rate limit")) {
    return (
      <div className="error-message">
        <p>Daily OpenAI credits exceeded, try tomorrow or message daniel@flybridge.com</p>
      </div>
    );
  }

  // Handle bad request errors (400)
  if (errorString.includes("400") || errorString.toLowerCase().includes("bad request")) {
    return (
      <div className="error-message">
        <p>Please check your uploaded documents. Either no documents were uploaded or they are in an incorrect format.</p>
        <p>{contactMessage}</p>
      </div>
    );
  }

  // For all other errors, display the error message with the contact information
  return (
    <div className="error-message">
      <p>{errorString}</p>
      <p>{contactMessage}</p>
    </div>
  );
}

export default ErrorMessage;