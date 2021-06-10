import React from 'react'
import './UsersPage.css'
import UsersState from '../../Store/Users/users.state'
import User from './User'
import {observer} from 'mobx-react-lite'

const UsersPage = observer(() => {

    let users = null;

    UsersState.getUsers();

    if (UsersState.users.length !== 0) {
        users = UsersState.users.map(user => <User key = {user.id} {...user}/>)
    }

    return (
        <div className="UsersPage">
            <div>
                {users}
            </div>
        </div>
    )
})

export default UsersPage;