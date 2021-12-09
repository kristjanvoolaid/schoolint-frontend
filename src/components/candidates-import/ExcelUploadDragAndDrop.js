import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ['xlsx', 'txt'];

function ExcelUploadDragAndDrop() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    }

    return (
        <FileUploader
            handleChange={handleChange}
            hoverTitle="Drag and drop here"
            name="file"
            // types={fileTypes}
        />
    );
}

export default ExcelUploadDragAndDrop
