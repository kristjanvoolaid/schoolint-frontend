import './AppHeader.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { BsPower } from 'react-icons/bs';
import { AppHeaderData } from './AppHeaderData';
import { IconContext } from 'react-icons';


import { Row, Container, Nav, Button, Form, FormControl } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap';

function AppHeader() {
     {
        return (
          <IconContext.Provider value={{color: '#fff'}}>
            <div className="App-header">
                <Navbar bg="medium" expand = "lg">
                    <Container fluid>

                    <Navbar.Brand href="./">
                    <img 
                    src= "https://www.tlu.ee/sites/default/files/TUKO/%C3%9Clikoolo%20logo/TLU-logo-pilt-vrv-suur.jpg"
                    width="130"
                    height="50"
                    className="d-inline-block align-top"
                    alt="TLU logo"/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                      >

                {AppHeaderData.map((item, index) => {
                        return (
                            <li key={index} className={item.cname}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                        <Nav.Link className="navbar-logout" exact to="./">
                              <BsPower />
                              <span>Logi välja</span>
                              </Nav.Link>
                         
                      </Nav>
      

    </Navbar.Collapse>
                    </Container>
                    <Form className="d-flex">
                        <FormControl
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>


                </Navbar>



                {/* <Row>  */}
                    {/* <Col xs={2} md={2}> <Image src= "https://www.tlu.ee/sites/default/files/TUKO/%C3%9Clikoolo%20logo/TLU-logo-pilt-vrv-suur.jpg" thumbnail/></Col>
                    <Col md={6}> Header </Col>
                    <Col xs= {4} md={2}> 
                    <ButtonGroup>
                    <Link to="#" className="menu-bars">
                        <Button className="button">
                    <FaIcons.FaBars color="secondary"/>
                        </Button>
                    </Link>
                    <Link to="#" className="menu-bars">
                        <Button className="button">
                    <FaIcons.FaBars color="secondary"/>
                        </Button>
                    </Link>
                    <Link to="#" className="navbar-logout">
                        <Button className="button">
                        <BsPower />
                        {/* <span>Logi välja</span> */}
                        {/* </Button>
                    </Link> */}
{/* 
                    </ButtonGroup></Col> */} 
                 {/* </Row> */}

             
            </div>
            </IconContext.Provider>
        )
    }
}


export default AppHeader;
