import {makeAutoObservable} from 'mobx'
import axios from 'axios';
import Cookies from 'js-cookie';
import UserState from '../User/user.state'

class AuthState {
    loginEmail = "";
    loginPassword = "";
    registerEmail = "";
    registerERROR = false;
    loginERROR = false;

    constructor() {
        makeAutoObservable(this)
    }

    changeLoginEmail(email) {
        this.loginEmail = email;
        this.loginERROR = false;
    }

    changeLoginPassword(password) {
        this.loginPassword = password;
        this.loginERROR = false;
    }

    changeRegisterEmail(email) {
        this.registerERROR = false;
        this.registerEmail = email;
    }

    async login() {
        let data = {}

        await axios.post('/auth/login', {
            email: this.loginEmail,
            password: this.loginPassword
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        if (data.status === "ok") {
            UserState.name = data.name;
            Cookies.set("name", data.name);
        }
        else {
            this.loginERROR = true;
        }
    }

    async register() {
        let data = {}

        await axios.post('/auth/register', {
            email: this.registerEmail
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        if (data === "error")
            this.registerERROR = true;

        if (data === "ok")
            this.loginEmail = this.registerEmail;
            this.registerEmail = '';
            this.loginPassword = '';
    }
}

export default new AuthState();