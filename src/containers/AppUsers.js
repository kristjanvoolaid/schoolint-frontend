import React, { Component } from 'react';
import Settings from '../components/settings/Settings';

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

    async fetchTags() {
        try {
            const response = await fetch('http://127.0.0.1:3001/tags');
            const tags = await response.json();

            this.setState({
                tags: tags.tags
            })
        } catch (error) {
            console.log(error);
        }
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