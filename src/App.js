import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Switch from './components/Switch';
import Footer from './components/Footer';


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Switch />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    )
  }
}
