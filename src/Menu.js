import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to="/import">Import</Link>
            <Link to="/students">Studends</Link>
        </div>
    )
}

export default Menu;