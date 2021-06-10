import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import UserState from '../User/user.state';
import Cookies from 'js-cookie';

class ProfileState {

    isLogged = false;

    newName = '';
    lastPassword = '';
    newPassword = '';

    constructor() {
        makeAutoObservable(this);
    }

    async takeInformation() {
        if (!this.isLogged) {
            return;
        }
        
        let data = {}

        await axios.post('/profile/takeinformation').then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        if (data.status === "ok") {
            UserState.name = data.name;
            Cookies.set('name', data.name);
        }
        else if (data.status === "404") {
            UserState.name = '';
            Cookies.remove('name');
            this.isLogged = false;
        }
    }
 
    async isLoggedFunc() {
        let data = {}

        await axios.post('/profile/isLogged').then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        if (data.status === "ok") {
            this.isLogged = true;
        }
    }

    changeName(name) {
        this.newName = name;
    }

    async changeNameSend() {
        await axios.post('/profile/changename', {
            name: this.newName
        }).then()

        this.newName = '';
        this.takeInformation();
    }

    changeLastPassword(password) {
        this.lastPassword = password;
    }

    changeNewPassword(password) {
        this.newPassword = password;
    }

    async changePassowrdSend() {
        let data = {}
        await axios.post('/profile/changepassword', {
            lastPassword: this.lastPassword,
            newPassword: this.newPassword
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })
        if (data.status === "ERROR") {
            
        }
        this.lastPassword = '';
        this.newPassword = '';
    }

    async logout() {
        this.isLogged = false;
        await axios.post('/profile/logout', {}).then()
        Cookies.remove('name');
        UserState.name = '';
        sessionStorage.setItem('remember', false);
        localStorage.removeItem('remember');
        window.location.replace('/')
    }
}

export default new ProfileState();