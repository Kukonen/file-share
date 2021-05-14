import React from 'react'
import './Files.css'
import FilesState from '../../Store/Files/files.state'
import File from '../File/File'
import {observer} from "mobx-react-lite";

const Files = observer(() => {

    FilesState.getOwnFiles();

    // const files = FilesState.files.map((file) => {
    //     return (
    //     <File key = {file.id} {...file }/>
    //     )
    // })

    return (
        <div className = "Files">
            {}
        </div>
    )
});

export default Files;