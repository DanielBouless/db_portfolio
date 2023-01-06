import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavigationBar = () => {

  const logout = () => {
    localStorage.removeItem("token");
  };
  const currentUser = false
  const loginActions = currentUser ? (
    <>
      <Nav.Link href="/myevents">Home</Nav.Link>
      <Nav.Link href="/profile">My Profile</Nav.Link>
      <Nav.Link href="/" onClick={logout}>
        {" "}
        Logout {currentUser.firstname}
      </Nav.Link>
    </>
  ) : (
    <>
      <Nav.Link href="/"> Home </Nav.Link>
      <Nav.Link href="/projects"> Projects </Nav.Link>
      <Nav.Link href="/about"> About </Nav.Link>
      <Nav.Link href="/contact"> Contact </Nav.Link>
    </>
  );

  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav" />
        <Container>
          <Navbar.Brand href="/"> DBworks </Navbar.Brand>
          <Nav className="me-auto">{loginActions}</Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
