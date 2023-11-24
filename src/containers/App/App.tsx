import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Route, Routes } from "react-router-dom";
import Home from '../Home/Home.tsx';
import About from '../About/About.tsx';
import Contacts from '../Contacts/Contacts.tsx';

function App() {
  return (
    <>
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <span className="text text-primary">test msg</span>
      </main>
    </>
  );
}

export default App;
