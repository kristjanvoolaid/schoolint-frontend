import React from 'react';
import { BsPower } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import { Container, Nav, Button, Form, FormControl, Figure } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Logo from './images/logo.svg';
import AuthService from "../../services/AuthService";
import authHeader from "../../services/AuthHeader";

function UserHeader() {
    let userBtn = "Logi sisse";

    if (authHeader().authorization !== undefined) {
        userBtn = "Logi välja";
    }
    return (
        <div>
            <IconContext.Provider value={{color: 'white', size: '30px', fontSize: '1em'}}>
                <div className="App-header">      
                     <Navbar collapseOnSelect expand="sm" variant= 'dark'>
                         <Container>
                             <Navbar.Brand href="/candidates">
                   <Figure.Image 
                                   src= {Logo}
                                 width="200"
                                  height="100"
                                    className="d-inline-block align-top"
                                    alt="TLU logo"
                                />
                            </Navbar.Brand>
                       </Container>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                           <Container>
                                <Nav className="justify-content-end">
                                    <Nav.Link eventKey='Nimekirjad' href="/candidates"><BsIcons.BsListUl />Nimekirjad</Nav.Link>
                                    <Nav.Link eventKey='Abi' href="/settings"><IoIcons.IoMdHelpCircle />Abi</Nav.Link>   
                                    <Nav.Link eventKey='Logout' onClick={AuthService.logout} href="/login"><BsPower />{userBtn}</Nav.Link>
                                </Nav>
                             </Container>
                      </Navbar.Collapse>   
                    </Navbar>
                </div>       
             </IconContext.Provider>
        </div>
    )
}

export default UserHeader;
