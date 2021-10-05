import React, { Component } from "react";
import StudentCardList from "../components/student-card/StudentCardList";

class Students extends Component {
    constructor() {
        super()
        this.state = {
          'students': [] 
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3001/students')
        .then(response => response.json())
        .then(students => this.setState({students: students.students}));
    }

    render() {
        return (
          <div className='App'>
            <StudentCardList students={this.state.students} />
          </div>
        )
    }
}

export default Students;