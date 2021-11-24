import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Menu = () => {
    return (
        <div className="tc ph3">
            <Link to="/"><Button variant= "success" className="button">Home </Button></Link> {' '}
            <Link to="/import"><Button variant= "success" className="button">Import</Button></Link>{' '}
            <Link to="/candidates"><Button variant= "success" className="button"> Candidates</Button></Link>{' '}
        </div>
    )
}

export default Menu;