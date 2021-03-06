import { observer } from 'mobx-react-lite'
import React from 'react'
import userState from '../../Store/User/user.state'
import './Header.css'

const Header = observer(() => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">File share</h5>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Main page</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/files/">Files</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/people/">People</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/support/">Support</a>
                </li>
            </ul>
            {userState.name === '' ? 
            <a className="btn btn-outline-primary" href="/login/">Login</a> :
            <a className="btn" href="/profile/">Profile</a>}
        </div>
    )
})

export default Header;