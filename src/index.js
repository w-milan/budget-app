import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
// ---------------------
import { createRoot } from 'react-dom/client';

// ReactDOM.render(<App />, document.getElementById('root'))
createRoot(document.getElementById('root')).render(<App tab="home" />);