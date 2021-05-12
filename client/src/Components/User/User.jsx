import React from 'react';
import './User.css'
import PeopleState from '../../Store/People/people.state'
import {observer} from 'mobx-react-lite'

const User = observer(() => {

    PeopleState.getOne()

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
            
        </div>
    )
});

export default User;