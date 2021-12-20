import React, { Component } from 'react';
import Settings from '../components/settings/Settings';

class AppUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    async fetchUsers() {
        try {
            const response = await fetch('http://127.0.0.1:3001/users');
            const users = await response.json();

            this.setState({
                users: users.users
            });
        } catch (error) {
            console.log(error);
        }
    }

    createUser(firstName, lastName, email, password, specialityCode) {
        const userPostRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, password, specialityCode})
        };
        
        fetch('http://127.0.0.1:3001/users', userPostRequest)
        .then(response => response.json())
        .then(data => console.log(data));
    }
    
    render() {
        const { users } = this.state;
        if (users.length < 1) {
            return <h1>No users to show!</h1>
        }
        
        return (
            <div>
                <Settings users={this.state.users} createUser={this.createUser}/>
            </div>
        )
    }
}

export default AppUsers;