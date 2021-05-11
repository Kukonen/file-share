import React from 'react';
import './Profile.css';
import ProfileState from '../../Store/Profile/profile.state'
import {observer} from 'mobx-react-lite'
import UserState from '../../Store/User/user.state'

const Profile = observer(() => {
    
    ProfileState.isLoggedFunc()

    return (
        <div className="Profile">
        {
            ProfileState.isLogged ? 
            <div>
                <h3>Hello, {UserState.name}</h3>
            </div> :
            <div>
                <h2>Please, Sign in</h2>
            </div>
        }
        </div>
    )
})

export default Profile;