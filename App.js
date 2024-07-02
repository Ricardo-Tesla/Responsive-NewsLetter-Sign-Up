import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import FormSubmissionPage from './formSubmissionPage';
import HomeDesktop from './homeDesktop';
import HomeMobile from './homeMobile';
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <Router>
      <div className="container container-custom">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-submission" element={<FormSubmissionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 800 });
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
      return;
    }
    setError(false);
    navigate('/form-submission', { state: { email } });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      {isDesktop && <HomeDesktop handleSubmit={handleSubmit} email={email} setEmail={setEmail} error={error} />}
      {isMobile && <HomeMobile handleSubmit={handleSubmit} email={email} setEmail={setEmail} error={error} />}
      {!isDesktop && !isMobile && <HomeDesktop handleSubmit={handleSubmit} email={email} setEmail={setEmail} error={error} />}
    </>
  );
}

export default App;
