import React from 'react';

export default function App() {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">Book Directory</a>
        <a href="/home"><i className='fa fa-refresh fa-spin' style={{'fontSize':'22px'}}></i></a>
      </div>
    </nav>
  );
}
