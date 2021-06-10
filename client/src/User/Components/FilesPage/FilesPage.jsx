import React from 'react';

import './FilesPage.css';

import Files from '../Files/Files';
import FilesBar from '../FilesBar/FilesBar';

const FilesPage = () => {
    return (
        <div className = "FilesPage">
            <Files />
            <FilesBar />
        </div>
    )
}

export default FilesPage;