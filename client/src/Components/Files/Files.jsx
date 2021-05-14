import React from 'react'
import './Files.css'
import FilesState from '../../Store/Files/files.state'
import File from '../File/File'
import {observer} from "mobx-react-lite";

const Files = observer(() => {

    FilesState.getOwnFiles();

    let filesGroup = [];

    if (FilesState.files.length !== undefined) {
        filesGroup = FilesState.files.map((file) => (
        <File key = {file.id} {...file }/>
    ))
    }
    
    return (
        <div className="Files">
            {filesGroup.length !== 0 ? filesGroup : null}
        </div>
    )
});

export default Files;