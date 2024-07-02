import React from 'react';
import success from './assets/icon-success.svg';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';

function FormSubmissionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleDismiss = () => {
    navigate('/');
  };

  return (
    <div className="container custom-container p-5">
      <div className="col-md-6">
        <img src={success} alt="poster" className="success-image" />
      </div>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span className="user-email">{email}</span>. Please open it and click the button inside to confirm your subscription.
      </p>
      <button className="custom-button p-3 rounded w-100 text-white" type="button" onClick={handleDismiss}>Dismiss message</button>
    </div>
  );
}

export default FormSubmissionPage;
