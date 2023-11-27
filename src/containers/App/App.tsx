import { Col, Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import Gallery from '../Gallery/Gallery.tsx';
import AboutMe from '../Contacts/AboutMe.tsx';

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
            <Col>
              <span className="text text-secondary">© 2011 John Doe All Rights Reserved</span>
            </Col>
            <Col lg={4} className="d-flex justify-content-around">
              <NavLink className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/">
                Home
              </NavLink>
              <NavLink className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/gallery">
                Gallery
              </NavLink>
              <NavLink className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/about-me">
                About Me
              </NavLink>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
