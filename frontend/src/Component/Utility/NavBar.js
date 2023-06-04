import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import login from '../../images/login.png'
// import '../../style/Component/StyleNavBar.css'
import login2 from '../../images/login2.png'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
  //   <Navbar bg="light" variant="light" style={{margin:0 ,height:"150 px" }}>
  //   <Container>
  //     <Navbar.Brand href="#home" className='logo1'> Tripoli Store </Navbar.Brand>
  //     <Nav className="me-auto">
  //       <Nav.Link href="/">Home</Nav.Link>
  //       <Nav.Link href="#features">Store</Nav.Link>
  //     </Nav>
  //     <Nav className="justify-content-end">
  //     <Nav.Link href="#home">
  //     <Navbar.Collapse className="justify-content-end">
  //         <Navbar.Text>
  //            <img src={login}/> Signed
  //         </Navbar.Text>
  //       </Navbar.Collapse></Nav.Link></Nav>
  //   </Container>
  // </Navbar>
  

// {/* <Navbar collapseOnSelect expand="light" bg="light" variant="light">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar> */}

    <nav>
  <div class="logo">
  <Link to="/"> <h1>Tripoli Craft</h1></Link> 
  </div>
  <div class="links">
  {/* <a href="#">Visit Store</a>
    <a href="#">Our Team</a>
    <a href="#">Contact</a>  */}
     <Link to="/#/kaa">Visit Store</Link>
     <Link to="/#">Our Team</Link>
     <Link to="/contact">Contact</Link>
     
    <img src={login2}/>
    {/* <a href="#" class="login-button">   Login </a> */}
    <Link to="Login" class="login-button"> 
    Login
    </Link>
  </div>
    </nav>
  );
}

export default NavBar;