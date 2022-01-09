import React, {Component} from 'react';
import './AppHeader.css';
import axios from "axios";
import config from "../../config";
import authHeader from "../../services/AuthHeader";
import LoginHeader from './LoginHeader';
import AdminHeader from './AdminHeader';
import UserHeader from './UserHeader';

export class AppHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            role: null
        };
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: config.API_URL + "/users/role",
            headers: authHeader()
        })
        .then(response => response)
        .then(result => this.setState({
            role: result.data.role
        }))
        .catch(error => console.log(error));
    }

    render() {
        let userBtn = "Logi sisse";

        if (authHeader().authorization !== undefined) {
            userBtn = "Logi välja";
        }
        return (
            <div>
                {this.state.role == undefined && <LoginHeader />}
                {this.state.role == "Admin" && <AdminHeader />}
                {this.state.role == "User" && <UserHeader />}
            </div>
        )
    }
}

export default AppHeader
