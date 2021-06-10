import React, { useState } from 'react';
import usersState from '../../Store/Users/users.state';

const User = (props) => {
    const [isShow, setIsShow] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(props.role);

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
                        <input placeholder="Change username" type="text" className="form-control" value={name} onChange={value => setName(value.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={() => usersState.changeName(props.email, name)}>Change</button>
                        </div>
                    </div>
                    <div className="input-group mb-3 User-input-block">
                        <input placeholder="Change email" type="text" className="form-control" value={email} onChange={value => setEmail(value.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={() => usersState.changeEmail(email, props.email)}>Change</button>
                        </div>
                    </div>
                    <div className="input-group mb-3 User-input-block">
                        <input placeholder="Change password" type="text" className="form-control" value={password} onChange={value => setPassword(value.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={() => usersState.chanegePassword(password, props.email)}>Change</button>
                        </div>
                    </div>
                    <div className="input-group mb-3 User-input-block">
                        {props.role === "user" ?
                            <select className="form-control" onChange={value => setRole(value.target.value)}> 
                                <option value="user" selected>user</option>
                                <option value="admin">admin</option>
                            </select> :
                            <select className="form-control" onChange={value => setRole(value.target.value)}> 
                                <option value="user" >user</option>
                                <option value="admin" selected>admin</option>
                            </select>
                        }
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick ={() => usersState.chanegeRole(role, props.email)}>Change</button>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default User;