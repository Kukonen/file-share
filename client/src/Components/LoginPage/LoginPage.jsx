import React from 'react'
import {observer} from "mobx-react-lite";
import './LoginPage.css'
import AuthState from '../../Store/Auth/auth.state'

const Login = observer(() => {
    return (
        <div>
            <div className="form-signin Login-form-hepler-block">
                <div className="Login-div-helper-block">
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input value={AuthState.loginEmail} type="email" className={AuthState.loginERROR ? "form-control is-invalid" : "form-control"} placeholder="Email address" required onChange={event => AuthState.changeLoginEmail(event.target.value)}/>
                    <label value={AuthState.loginPassword} for="inputPassword" className="sr-only">Password</label>
                    <input type="password" className={AuthState.loginERROR ? "form-control is-invalid" : "form-control"} placeholder="Password" required onChange={event => AuthState.changeLoginPassword(event.target.value)}/>
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        invalid email or password
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" onChange= {(value) => AuthState.changeLoginRemember(value.target.checked)}/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={() => AuthState.login()}>Sign in</button>
                </div>
                <div>
                <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" value={AuthState.registerEmail} className={AuthState.registerERROR ? "form-control is-invalid" : "form-control"} placeholder="Email address" required onChange={event => AuthState.changeRegisterEmail(event.target.value)}/>
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        invalid email
                    </div>
                    <br/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={() => AuthState.register()}>Sign up</button>
                </div>
            </div>
        </div>
    )
});

export default Login;