import React from 'react';
import './File.css';
import FileState from '../../Store/Files/files.state';

import {FileEarmarkImage} from 'react-bootstrap-icons';
import {FileEarmarkText} from 'react-bootstrap-icons';
import {FileEarmarkSpreadsheet} from 'react-bootstrap-icons';
import {FileEarmarkPdf} from 'react-bootstrap-icons';
import {FileEarmark} from 'react-bootstrap-icons';

const File = (props) => {

    const fileExtension = props.name.split('.')[props.name.split('.').length - 1];

    return (
        <div className="File">
            {(fileExtension === 'jpg' || fileExtension === 'png' || fileExtension === 'icon' || fileExtension === 'svg') ? <FileEarmarkImage className="File-Image"/> :
            (fileExtension === 'text' || fileExtension === 'word') ? <FileEarmarkText className="File-Image"/> :
            (fileExtension === 'xls') ? <FileEarmarkSpreadsheet className="File-Image"/> :
            (fileExtension === 'pdf') ? <FileEarmarkPdf className="File-Image"/> :
            <FileEarmark className="File-Image"/>
            }
            <p className="File-Text">{props.name}</p>
            <span onClick = {() => {FileState.downloadFile(props.id, props.name)}} className="File-Link nav-link">Download</span>
            {
                (fileExtension === 'jpg' || fileExtension === 'png' || fileExtension === 'icon' || fileExtension === 'svg') ? 
                    <a href = {"http://localhost:5000/" + props.path} className="File-Link nav-link">Show</a> :
                null
            }
            
        </div>
    )
}

export default File;