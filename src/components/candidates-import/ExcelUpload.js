import React, { Component } from 'react'
import axios from 'axios'

class ExcelUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            selectedValue: 1
        }
    }

    handleSelectedChange = (e) => {
        this.setState({
            selectedValue: e.target.value
        });

        console.log(this.state.selectedValue);
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
            dataToSend.append('templateValue', this.state.selectedValue);
        
            // Sending file to backend
            axios({
                method: "POST",
                url: "http://localhost:3001/upload",
                data: dataToSend,
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
                        <option value="2">Kandidaadid</option>
                </select>
                <input name="file" type="file" onChange={this.onChangeHandler} accept=".xls, .xlsx"/>
                <button type="button" onClick={this.onClickHandler}>Upload</button>
            </div>
        )
    }
}

export default ExcelUpload;
