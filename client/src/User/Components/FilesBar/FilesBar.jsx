import React from 'react';
import './FilesBar.css';
import FilesState from '../../Store/Files/files.state'
import {observer} from "mobx-react-lite";

const FilesBar = observer(() => {
    return (
        <div className = "FilesBar">
            <h3>Upload file</h3>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFileLangHTML" onChange={(value) => FilesState.changeFile(value)} />
                <label className="custom-file-label" for="customFileLangHTML" data-browse="Browse">Select file</label>
                <br /> <br />
                <button className="btn btn-secondary" onClick={() => FilesState.sendFile()}>Send</button>
            </div>
        </div>
    )
})

export default FilesBar;