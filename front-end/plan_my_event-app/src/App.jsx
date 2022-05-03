//import logo from './logo.svg';
//import './App.css';
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import VendorRegister from "./pages/VendorRegister";
import VendorCards from "./components/Categories";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import React from "react";
import Navbar from "./components/NavBar";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"
                       element={<Home/>}/>
                <Route path="/register"
                       element={<Register/>}/>
                <Route path="/login"
                       element={<Login/>}/>
                <Route path="/vendorRegistration"
                       element={<VendorRegister/>}/>
            </Routes>
        </Router>
    );
}

export default App;
