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
        let data = {}

        await axios.post('/profile/takeinformation').then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        console.log(data);
        console.log(data.status);
        console.log(data.name);

        if (data.status === "ok") {
            UserState.name = data.name;
            Cookies.set('name', data.name);
        }
        else if (data.status === "404") {
            UserState.isLogged = false;
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
        let data = {}

        await axios.post('/profile/changename', {
            name: this.newName
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        this.takeInformation();
    }
}

export default new ProfileState();