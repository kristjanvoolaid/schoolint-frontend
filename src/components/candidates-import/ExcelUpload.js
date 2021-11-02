import React, { Component } from 'react'
import axios from 'axios'

class ExcelUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
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

        try {
            const dataToSend = new FormData();
            dataToSend.append('file', this.state.file);
        
            // Sending file to backend
            axios.post("http://localhost:3001/import", dataToSend, {
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
                <input name="Import" type="file" onChange={this.onChangeHandler} accept=".xls, .xlsx"/>
                <button type="button" onClick={this.onClickHandler}>Upload</button>
            </div>
        )
    }
}

export default ExcelUpload;
