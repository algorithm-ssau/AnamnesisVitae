import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/styles/ResultsView.css'
import '../src/styles/Questionnaire.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
