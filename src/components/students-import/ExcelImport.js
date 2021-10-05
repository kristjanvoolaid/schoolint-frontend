import React from "react";
import * as XLSX from 'xlsx';

function ExcelImport() {
    const data = [];
    const readExcel = (file) => {

      const promise = new Promise((resolve, reject) => {
        
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
  
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          const workbook = XLSX.read(bufferArray, { type: "buffer"});
          const worksheetName = workbook.SheetNames[0];
  
          const worksheet = workbook.Sheets[worksheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
  
          resolve(data);
        }
  
        fileReader.onerror = (error => {
          reject(error)
        })
      });
  
      promise.then((d) => {
        for (let i = 0; i < d.length; i++) {
          data.push(d[i]);
        }
      });
    }

    const sendData = (data) => {
      fetch('http://localhost:3001', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => { console.log('Success:', data);
          })
          .catch((error) => { console.error('Error:', error);
        });

        alert("Sent!");
    }

    return (
      <div>
        <input 
          type="file"
          onChange={(e) => {
          const file = e.target.files[0];
  
          readExcel(file);
        }}/>
        <input 
          type="button"
          value="Send" 
          onClick={(e) => {
            sendData(data);
        }}/>
      </div>
    );
  }

  export default ExcelImport;