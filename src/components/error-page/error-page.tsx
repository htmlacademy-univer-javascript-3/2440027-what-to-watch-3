import React from 'react';

type ErrorPageProps = {
  message: string;
  status?: number;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ message, status }) => (
  <div className="error-page">
    {status && <h2>Error {status}</h2>}
    <p>{message}</p>
  </div>
);

export default ErrorPage;
