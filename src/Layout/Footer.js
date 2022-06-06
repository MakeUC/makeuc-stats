import React from 'react';

export function Footer() {
  return <footer className="py-5 bg-primary-new">
    <div className="container">
      <p className="m-0 text-center text-white">
        <a href="https://makeuc-2021.devpost.com/" className="btn-primary-new mt-2" style={{ margin: '0 auto', color: '#f1f1f1', fontSize: '1.25em', fontWeight: '600', textDecoration: 'underline' }}>Previous Projects</a>
        <br />
        &copy; 2022 MakeUC
      </p>
    </div>
  </footer>;
}