import React from 'react';
import "./App.css"
import Login from './component/Login';
import SignUp from './component/SignUp';
import { Navigate, Route ,Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='App' >
      <Routes>
     <Route path="Login" element={<Login/>}/>
     <Route path="SignUp" element={<SignUp/>}/>
     <Route path="/" element={<Navigate to="login"/>}/>
     </Routes>
    </div>
  );
};

export default App;