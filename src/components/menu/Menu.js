import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="tc ph3">
            <Link className="f6 link dim br2 ph3 pv2 mh2 mb3 mt3 dib white bg-black" to="/home">Home</Link>
            <Link className="f6 link dim br2 ph3 pv2 mh2 mb3 mt3 dib white bg-black" to="/import">Import</Link>
            <Link className="f6 link dim br2 ph3 pv2 mh2 mb3 mt3 dib white bg-black" to="/candidates">Candidates</Link>
        </div>
    )
}

export default Menu;