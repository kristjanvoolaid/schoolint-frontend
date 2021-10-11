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

    onClickHandler = () => {
        
        // TODO: Make proper alerting box or sign that no file is selected. Current solution is for testing
        if (this.state.file == null) {
            return alert('No file selected!');
        }

        const dataToSend = new FormData();
        dataToSend.append('file', this.state.file);
        
        // Sending file to backend
        axios.post("http://localhost:3001/import", dataToSend, {
        })
        .then(response => response.statusText)
        .then(result => console.log(result));
    }

    render() {
        return (
            <div className="tc">
                <h1>Upload candidates excel</h1>
                <input type="file" onChange={this.onChangeHandler}/>
                <button type="button" onClick={this.onClickHandler}>Upload</button>
            </div>
        )
    }
}

export default ExcelUpload;
