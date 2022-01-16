import React, { Component } from 'react';
import axios from 'axios';
import authHeader from '../../services/AuthHeader';
import config from "../../config";

class CandidatesSaisUpload extends Component {
    constructor(props) {
        super(props)

        let date = new Date();

        this.state = {
            file: null,
            templateId: 1,
            year: date.getFullYear(),
            listCode: 1,
            courses: []
        }
    }

    handleListCodeChange = (e) => {
        this.setState({
            listCode: e.target.value
        });
    };

    handleSelectedYear = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    onChangeHandler = (e) => {
        this.setState({
            file: e.target.files[0]
        });
    }

    listDataToBackend = () => {

        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        dataToSend.append('templateId', this.state.templateId);
        dataToSend.append('year', this.state.year);
        dataToSend.append('courseId', this.state.listCode);

        try {
            axios({
                method: "POST",
                url: `${config.API_URL}/lists`,
                data: dataToSend,
                headers: authHeader()
            })
            .then(response => response.statusText)
            .then(result => console.log(result));

            this.setState({
                file: null
            });
        } catch (error) {
            console.log(error);
        }

        if (this.state.file == null) {
            return alert('No file selected!');
        }

        return alert('File sent');
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: config.API_URL + "/courses",
            headers: authHeader()
        })
        .then(response => {
            this.setState({
                courses: response.data.courses
            })
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="text-center">
                <h1>Uus nimekiri</h1>
                <select value={this.state.listCode} onChange={this.handleListCodeChange}>
                    <option value="">Vali õppekava</option>
                    {this.state.courses.map(course => (
                        <option value={course.id}>{course.name}</option>
                    ))}
                </select>
                <input name="year" type="number" defaultValue={this.state.year} onChange={this.handleSelectedYear} min="2021" max="2050"></input>
                <input name="file" type="file" onChange={this.onChangeHandler} accept=".xls, .xlsx"/>
                <button type="button" onClick={this.listDataToBackend}>Upload</button>
            </div>
        )
    }
}

export default CandidatesSaisUpload;