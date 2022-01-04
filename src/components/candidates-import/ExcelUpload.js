import React, { Component } from 'react';
import axios from 'axios';
import authHeader from '../../services/AuthHeader';

class ExcelUpload extends Component {
    constructor(props) {
        super(props)

        let date = new Date();

        this.state = {
            file: null,
            selectedValue: 1,
            year: date.getFullYear()
        }
    }

    handleSelectedChange = (e) => {
        this.setState({
            selectedValue: e.target.value
        });

        console.log(this.state.selectedValue);
    }

    handleSelectedYear = (e) => {
        console.log(e.target.value);
        this.setState({
            year: e.target.value
        })
    }

    onChangeHandler = (e) => {
        this.setState({
            file: e.target.files[0]
        });
    }

    onClickHandler = (e) => {
        
        // TODO: Make proper alerting box or sign that no file is selected. Current solution is for testing
        if (this.state.file == null) {
            return alert('No file selected!');
        }

        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        dataToSend.append('templateValue', this.state.selectedValue);
        dataToSend.append('year', this.state.year);

        try {
            // Sending file to backend
            axios({
                method: "POST",
                url: "http://localhost:3001/upload",
                data: dataToSend,
                headers: authHeader()
            })
            .then(response => response.statusText)
            .then(result => console.log(result));

            alert('File sent!')
            this.setState({
                file: null
            });
        } catch (error) {
            console.log(error)
            return alert('Failed to send file')   
        }
    }

    render() {
        return (
            <div className="text-center">
                <h1>Upload candidates excel</h1>
                <select name="templateValue" id="templateChoice" defaultValue={this.state.selectedValue} onChange={this.handleSelectedChange}>
                        <option value="1">SAIS</option>
                        <option value="2">Tulemused</option>
                </select>
                <input name="year" type="number" defaultValue={this.state.year} onChange={this.handleSelectedYear} min="2021" max="2050"></input>
                <input name="file" type="file" onChange={this.onChangeHandler} accept=".xls, .xlsx"/>
                <button type="button" onClick={this.onClickHandler}>Upload</button>
            </div>
        )
    }
}

export default ExcelUpload;