import React, {Component} from 'react';
// import {withRouter} from "react-router-dom";
import './AppHeader.css';

class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const path = this.props.location.pathname.slice(1);
        return (
        <div classname="headerbar1">
            <h2>{path}</h2>
            </div>)
    }
}
export default Header;