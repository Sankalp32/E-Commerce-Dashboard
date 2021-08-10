import React from 'react';
import {Container, Navbar , Nav, NavDropdown} from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom'
 
const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    const history = useHistory();


    function logout() {
        localStorage.clear();
        history.push("/register");
        
    }
    return(
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto nav_bar_wrapper">
        { 
            localStorage.getItem('user') ? 
            <>
            <Link to ="/add"> Add Product</Link>
            <Link to = "/update"> Update Product</Link>
            </>
            :
            <>
            <Link to = "/login"> Login</Link>
            <Link to = "/register"> Register</Link>
            </>
        }
        
        
      
    </Nav>
    { 
            localStorage.getItem('user') ? 
    <Nav>
        <NavDropdown title={user && user.name}>
            <NavDropdown.Item
            onClick={logout}
            >
                Logout
            </NavDropdown.Item>
            <NavDropdown.Item>
               Profile
            </NavDropdown.Item>
        </NavDropdown>
    </Nav>
    : null 
    }
    </Container>
  </Navbar>
        </div>
    );
}

export default Header;