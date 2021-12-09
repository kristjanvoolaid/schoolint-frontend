import './AppHeader.css';
import React, {useState} from 'react';
import { BsPower } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import { Container, Nav, Button, Form, FormControl } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap';

function AppHeader() {
     {
        return (
          <IconContext.Provider value={{color: 'white', size: '30px', fontSize: '1em'}}>
            <div className="App-header">

                
            <Navbar collapseOnSelect expand="sm" variant= 'dark'>
               <Container>
                <Navbar.Brand href="./">
                <img 
                src= "https://www.tlu.ee/sites/default/files/TUKO/%C3%9Clikoolo%20logo/TLU-logo-pilt-vrv-suur.jpg"
                width="130"
                height="50"
                className="d-inline-block align-top"
                alt="TLU logo"/>
                </Navbar.Brand>
                </Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container>
                    <Nav
                    className="justify-content-end"
                    >


                            <Nav.Link eventKey='Töölaud' href="/lists"><CgIcons.CgMenuBoxed />Töölaud</Nav.Link>
                            <Nav.Link eventKey='Nimekirjad' href="/candidates"><BsIcons.BsListUl />Nimekirjad</Nav.Link>
                            <Nav.Link eventKey='Abi' href="/settings"><IoIcons.IoMdHelpCircle />Abi</Nav.Link>
                            <Nav.Link eventKey='Logout'  href="/"><BsPower />Välju</Nav.Link>

                        {/* </Nav.Item> */}
                    </Nav>
                    </Container>
                    
                </Navbar.Collapse>
                
            </Navbar>
                      
           
            </div>
            <div>
                <p></p>
            </div>
          
            <Form className="d-flex">
                        <FormControl
                          type="search"
                          placeholder="Otsi"
                          className="justify-content-xl-end"
                          aria-label="Search"

                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                     
            </IconContext.Provider>
        )
    }
}


export default AppHeader;
