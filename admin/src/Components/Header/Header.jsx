import React from 'react';

const Header = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Admin panel</h5>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Main page</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users/">Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/feedback/">Feedback</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;