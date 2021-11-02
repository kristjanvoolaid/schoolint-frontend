import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link className="f6 link dim br2 ph3 pv2 mh2 mb3 mt3 dib white bg-black" to="/">Home</Link>
            <Link className="f6 link dim br2 ph3 pv2 mh2 mb3 mt3 dib white bg-black" to="/candidates">Töölaud</Link>
            <Link className="f6 link dim br2 ph3 pv2 mh2 mb3 mt3 dib white bg-black" to="/lists">Nimekirjad</Link>        
        </div>
    )
}

export default Menu;