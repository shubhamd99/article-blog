import React, { Component } from 'react';
import './home.css';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Container className='home-grid'>
                <Row>
                    <Col className='home-col' sm={12}><h1>Welcome to the Article World</h1></Col>                    
                </Row>
                <Row>
                    <Col sm={12} >
                    <ButtonToolbar className='button-toolbar'>
                        <Button variant="danger" size="lg"><Link to="/article" style={{textDecoration:'none', color:'white'}}>Article Feed</Link></Button>
                        <Button variant="danger" size="lg"><Link to="/write" style={{textDecoration:'none', color:'white'}}>Write Article</Link></Button>
                    </ButtonToolbar>
                    </Col>                    
                </Row>

                <Row>
                    <Col sm={12} className='home-bottom-grid' >
                       <div>          
                       </div>
                    </Col>                    
                </Row>


           </Container>
        );
    }
}

export default Home;