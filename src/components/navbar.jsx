import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" >
                <Navbar.Brand><Link to="/" style={{textDecoration:'none', color:'#3E3E3E  '}}>Article World</Link></Navbar.Brand>
                <Nav className="mr-auto">
                
                <Nav.Link><Link to="/article" style={{textDecoration:'none', color:'#545454'}}>Article Feed</Link></Nav.Link>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link><Link to="/write" style={{textDecoration:'none', color:'#545454'}}>Write One</Link></Nav.Link>
                </Navbar.Collapse>
                </Nav>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Form inline className='nav-form-button' >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomBar;