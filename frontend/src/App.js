import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePage from './Page/HomePage';
import NavBar from './components/Utility/NavBar';

export default function App() {
  return (
    <div>
<NavBar/>
<Routes>
     <Route index element={<HomePage/>}/>
     <Route path="/signup" element={<SignUp/>}/>
    </Routes>

      {/* <SignUp/> */}
    </div>
  )
}
