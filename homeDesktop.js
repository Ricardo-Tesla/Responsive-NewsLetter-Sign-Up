import React from 'react';
import illustration from './assets/illustration-sign-up-desktop.svg';
import './App.css';

function HomeDesktop({ handleSubmit, email, setEmail, error }) {
  return (
    <main className="container-custom bg-white">
      <div className="row align-items-center">
        <div className="content-custom col-12 col-md-5 mb-1 mb-md-0">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="custom-list">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <div className="custom-email d-flex">
                <label htmlFor="email" className="form-label">Email address</label>
                {error && <p className="text-danger">Valid email required</p>}
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
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <img src={illustration} alt="poster" className="img-fluid" />
        </div>
      </div>
    </main>
  );
}

export default HomeDesktop;
