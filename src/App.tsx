import React from 'react';
import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';

const App: React.FC = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default App;