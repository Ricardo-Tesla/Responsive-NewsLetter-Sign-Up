import React from 'react';
import illustration from './assets/illustration-sign-up-mobile.svg'; 
import './App.css';

function HomeMobile({ handleSubmit, email, setEmail, error }) {
  return (
    <main className="container-custom bg-white">
      <div className="row align-items-center">
        <div className="col-12 text-center mt-3">
          <img src={illustration} alt="poster" className="img-fluid mb-3" />
        </div>
        <div className="content-custom col-12 mb-1">
          <h1 className="text-center">Stay updated!</h1>
          <p className="text-center">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="custom-list">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <div className="custom-email d-flex justify-content-between align-items-center">
                <label htmlFor="email" className="form-label">Email address</label>
                {error && <p className="text-danger mb-0">Valid email required</p>}
              </div>
              <input
                type="email"
                className={`form-control ${error ? 'border-danger' : ''}`}
                name="email"
                id="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="custom-button p-3 rounded w-100 text-white" type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default HomeMobile;
