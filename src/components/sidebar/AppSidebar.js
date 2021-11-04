import React, { Component } from 'react'
import Sidebar from 'react-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';

class AppSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    };

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open});
    }

    closeSidebar() {
        this.setState({ sidebarOpen: false});
    }
    
    render() {
        return (
            <div>   
            <Sidebar
                sidebar={
                    <button onClick={() => this.closeSidebar()}>
                    Close sidebar
                    </button>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "gray"}, root: { overflow: "auto" }}}
            >  
            <div id="toggleMenu">
                <GiHamburgerMenu size={30} onClick={() => this.onSetSidebarOpen(true)}/>
            </div>    
            </Sidebar>
            </div>
        );
    }
}

export default AppSidebar;
