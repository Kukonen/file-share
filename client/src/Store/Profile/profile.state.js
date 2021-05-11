import {makeAutoObservable} from 'mobx';
import axios from 'axios';

class ProfileState {

    isLogged = false;

    newName = '';
    lastPassword = '';
    newPassword = '';

    constructor() {
        makeAutoObservable(this);
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

    }
}

export default new ProfileState();