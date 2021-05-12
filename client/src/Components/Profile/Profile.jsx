import React from 'react';
import './Profile.css';
import ProfileState from '../../Store/Profile/profile.state'
import {observer} from 'mobx-react-lite'
import UserState from '../../Store/User/user.state'

const Profile = observer(() => {
    
    ProfileState.isLoggedFunc();
    ProfileState.takeInformation();

    return (
        <div className="Profile">
        {
            ProfileState.isLogged ? 
            <div>
                <h3 className="Profile-h3">Hello, {UserState.name}</h3>
                <h4>Change name</h4>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="New name" onChange={(value) => ProfileState.changeName(value.target.value)}/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => ProfileState.changeNameSend()}>Change</button>
                    </div>
                </div>
                <h4>Change password</h4>
                <div class="input-group Profile-input-block">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Last password</span>
                    </div>
                    <input type="text" class="form-control" />
                </div>
                <div>
                    <div class="input-group Profile-input-block">
                        <div class="input-group-prepend">
                            <span class="input-group-text">New password</span>
                        </div>
                        <input type="text" class="form-control" />
                    </div>
                    <input type="button" className="btn btn-secondary" value = "Change Password"/>
                </div>
                <input type="button" className="btn btn-danger Profile-logout-btn" value="Log out"/>
            </div> :
            <div>
                <h2>Please, Sign in</h2>
            </div>
        }
        </div>
    )
})

export default Profile;