import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import login from '../../images/login.png'
import '../../style/Component/StyleNavBar.css'
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home" className='logo'>KKOO</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#features">Store</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
      <Nav.Link href="#home">
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <img src={login}/> Signed
          </Navbar.Text>
        </Navbar.Collapse></Nav.Link></Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;