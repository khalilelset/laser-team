import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <div>
      <SignUp/>
    </div>
  )
}
