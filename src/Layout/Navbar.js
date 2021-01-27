import React from 'react';

export function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-primary-new fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src="https://assets.revolutionuc.com/email/revuc-logo-spring-2021.png" alt="RevolutionUC" />
        RevolutionUC Stats
      </a>
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://revolutionuc.com/">Main website</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}