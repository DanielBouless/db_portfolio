import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Access } from "../context/annoying_captcha_success";
import { useContext } from 'react'
const NavigationBar = () => {

  const { access } = useContext(Access)

 
  const loginActions = access ? (
    <>
      <Nav>
        <Nav.Link href="/home"> Home </Nav.Link>
        <Nav.Link href="/projects"> Projects </Nav.Link>
        <Nav.Link href="/about"> About </Nav.Link>
        <Nav.Link href="/contact"> Contact </Nav.Link>
      </Nav>
    </>
  ) : (
    <>Gotta get past the game first... dont rush</>
  );

  return (
    <Container>
      <Navbar className="fixed-top" style={{paddingRight:10, paddingLeft:10}} bg="dark" expand={false} variant="dark">
        <Navbar.Brand href="/"> DBworks </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
        <Navbar.Offcanvas
          id={"offcanvasNavbar-expand-false"}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
              DBworks
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              {loginActions}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Navbar>
    </Container>
  );
};

export default NavigationBar;




/**
 *     
    <Container>
      <Navbar className="fixed-top" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav" />
        <Container fluid>
          <Navbar.Brand href="/"> DBworks </Navbar.Brand>
          <Nav className="mr-auto">{loginActions}</Nav>
        </Container>
      </Navbar>
    </Container>
 */