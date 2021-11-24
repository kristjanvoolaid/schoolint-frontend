import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BsPower } from 'react-icons/bs';
import  { AppSideBarData } from './AppSideBarData';
import './AppSideBar.css';
import { IconContext } from 'react-icons';

function AppSideBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} color="primary"/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" onClick={showSidebar}>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className="navbar-user">
                        <h5>Tere, kasutaja!</h5>
                        <p>RIF</p>
                    </li>
                    {AppSideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cname}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <div className="navbar-logout">
                        <BsPower />
                        <span>Logi välja</span>
                    </div>
                </ul>
            </nav>
        </IconContext.Provider>  
        </>
    )
}

export default AppSideBar;