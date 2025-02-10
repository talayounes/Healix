import React, { useState } from "react";
import "./UploadPortal.css"; // ✅ Import CSS

function UploadFile() {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 style={{ color: "white" }}>Upload Files</h2> {/* ✅ Keep only this heading */}

            <div className="upload-box">  {/* ✅ Increased box size */}
                <p className="upload-label"></p>

                <label className="upload-button">
                    Select Files
                    <input type="file" className="file-input" multiple onChange={handleFileChange} />
                </label>

                {files.length > 0 && (
                    <ul className="file-list">
                        {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default UploadFile;
