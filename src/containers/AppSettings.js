import React, { Component } from 'react';
import axios from "axios";
import Settings from '../components/settings/Settings';
import authHeader from "../services/AuthHeader";
import { Spinner } from 'react-bootstrap';
import config from "../config";


class AppSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'tags': [],
            status: ''
        }
    }

    componentDidMount() {
        this.fetchUsers();
        this.fetchTags();
    }

    fetchUsers() {
        axios.get(config.API_URL + '/users', { headers: authHeader() })
        .then((response) => {
            this.setState({
                users: response.data.users
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    fetchTags() {
        axios.get(config.API_URL + '/tags', { headers: authHeader() })
        .then((response) => {
            this.setState({
                tags: response.data.tags
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    createUser(firstName, lastName, email, password, specialityCode) {
        axios({
            method: 'POST',
            url: config.API_URL + "/users",
            data: {
                firstName,
                lastName,
                email,
                password,
                specialityCode
            },
            headers: authHeader()
        })
        .then(response => response.data)
        .then(status => console.log(status))
        .catch(error => console.log(error));
    }

    createTag(name, courseId) {
        axios({
            method: 'POST',
            url: config.API_URL + "/tags",
            data: {
                name,
                courseId
            },
            headers: authHeader()
        })
        .then(response => response.data)
        .then(status => console.log(status))
        .catch(error => console.log(error))
    }
    
    render() {
        const { users, tags } = this.state;
        if (users.length < 1) {
            return (
                <div className="text-center" style={{ marginTop: 50 }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )
        }

        if (tags.length < 1) {
            return (
                <div className="text-center" style={{ marginTop: 50 }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )
        }
        
        return (
            <div>
                <Settings users={this.state.users} createUser={this.createUser} tags={this.state.tags} createTag={this.createTag}/>
            </div>
        )
    }
}

export default AppSettings;