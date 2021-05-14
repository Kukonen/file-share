import React from 'react';
import './User.css'
import PeopleState from '../../Store/People/people.state'
import {observer} from 'mobx-react-lite'
import FilesState from '../../Store/Files/files.state'
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

const User = observer(() => {

    PeopleState.getOne()

    const userId = window.location.href.split('/')[window.location.href.split('/').length - 1];

    FilesState.getUserFiles(userId);

    let filesGroup = [];

    if (FilesState.files.length !== undefined) {
        filesGroup = FilesState.files.map((file) => (
        <li key = {file.id} className="UserSpan list-group-item">
            <span>{file.name}</span>
        </li>
    ))
    }

    return (
        <div className = "User">
            {PeopleState.personName !== null ? 
            <div>
                <h3>Name: {PeopleState.personName}</h3>
                <h4>Files: </h4>
            </div> :
            <div>
                <h3>No one user here!</h3>    
            </div>}
            <div>
                <ul className="list-group list-group-flush">
                    {filesGroup}
                </ul>
            </div>
        </div>
    )
});

export default User;