import React from 'react'
import './Files.css'
import FilesState from '../../Store/Files/files.state'
import File from '../File/File'
import {observer} from "mobx-react-lite";
import {util} from 'util'

const Files = observer(() => {

    FilesState.getOwnFiles();

    // const filesGroup = FilesState.files.map((file) => (
    //     <File key = {file.id} {...file }/>
    // ))
    let filesGroup = [];

    if (FilesState.files.length !== undefined) {
        filesGroup = FilesState.files.map((file) => (
        <File key = {file.id} {...file }/>
    ))
    }
    

    if (filesGroup.length !== 0) {
        return (
        <div>
            {filesGroup}
        </div>
    )
    }
    else {
        return (
            <div>
            </div>
        )
    }
});

export default Files;