import React, { Component } from 'react';
import axios from "axios";
import Settings from '../components/settings/Settings';
import authHeader from "../services/auth.header";

const API_URL = "http://localhost:3001";

class AppUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'tags': []
        }
    }

    componentDidMount() {
        this.fetchUsers();
        this.fetchTags();
    }

    fetchUsers() {
        axios.get(API_URL + '/users', { headers: authHeader() })
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
        axios.get(API_URL + '/tags', { headers: authHeader() })
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
        try {
            const userPostRequest = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, password, specialityCode})
            };
            
            fetch('http://127.0.0.1:3001/users', userPostRequest)
            .then(response => response.json())
            .then(data => console.log(data));
    
            // Refresh page if user is created
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    }

    createTag(name, courseId) {
        try {
            const tagPostRequest = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, courseId })
            };
    
            fetch('http://127.0.0.1:3001/tags', tagPostRequest)
            .then(response => response.json())
            .then(data => console.log(data));

            // Refresh page if tag is created
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        const { users, tags } = this.state;
        if (users.length < 1) {
            return <h1 className="text-center">No users to show!</h1>
        }

        if (tags.length < 1) {
            return <h1 className="text-center">No tags to show!</h1>
        }
        
        return (
            <div>
                <Settings users={this.state.users} createUser={this.createUser} tags={this.state.tags} createTag={this.createTag}/>
            </div>
        )
    }
}

export default AppUsers;