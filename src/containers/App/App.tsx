import { Col, Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import Gallery from '../Gallery/Gallery.tsx';
import Contacts from '../Contacts/Contacts.tsx';

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
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <footer className="bg-body-tertiary">
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
