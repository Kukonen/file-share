import React, { useState } from 'react';

const User = (props) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div className="card User">
                <div className="card-header">
                    <h2 className="mb-0" onClick={() => { setIsShow(!isShow) } }>
                        <button className="btn btn-link btn-block text-left collapsed nav-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {props.name} | {props.email}
                        </button>
                    </h2>
                </div>
                <div className={isShow ? "collapse show" : "collapse"}>
                    <div className="input-group mb-3 User-input-block">
                        <input placeholder="Change username" type="text" className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Change</button>
                        </div>
                    </div>
                    <div className="input-group mb-3 User-input-block">
                        <input placeholder="Change email" type="text" className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Change</button>
                        </div>
                    </div>
                    <div className="input-group mb-3 User-input-block">
                        <input placeholder="Change password" type="text" className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Change</button>
                        </div>
                    </div>
                    <div className="input-group mb-3 User-input-block">
                        <select className="form-control">
                            <option selected>Role</option>
                            <option>user</option>
                            <option>admin</option>
                        </select>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Change</button>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default User;