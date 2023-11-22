import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand href="#home">Jaweria Saleem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            
             </Nav>
          <Nav className="ms-auto"> {/* ms-auto pushes the following items to the right */}
            <Button variant="primary">Download CV</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
