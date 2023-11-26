import { Col, Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import Gallery from '../Gallery/Gallery.tsx';
import AboutMe from '../Contacts/AboutMe.tsx';
import React from 'react';

function App() {
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBrand>JohnDoe</NavbarBrand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
                <NavLink className="nav-link" to="/about-me">
                  About Me
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <main className="mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </main>
      </Container>
      <footer className="bg-body-tertiary py-3 px-3">
        <Container>
          <Row>
            <Col>footer content</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
