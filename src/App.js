import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Home from './components/Home';
import CodeState from './context/codes/CodeState';
import {  Routes, Route } from "react-router-dom"; 
import Add_code from './components/Add_code';
import Ds_codes from './components/Ds_codes';
import Cpp_codes from './components/Cpp_codes';
import Navbar from './components/Navbar';
import Admin_login from './components/Admin_login';


function App() {
  return (
    <>

   
    <CodeState>


      <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ds" element={<Ds_codes />} />
    <Route path="/cpp" element={<Cpp_codes />} />
    <Route path="/add_code" element={<Add_code />} />
    <Route path="/admin_login" element={<Admin_login />} />
   
    </Routes>
    </CodeState>
    
    </>

  );
}

export default App;