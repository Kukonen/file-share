import {makeAutoObservable} from 'mobx';
import axios from 'axios';

class ProfileState {

    isLogged = false;

    constructor() {
        makeAutoObservable(this);
    }

    async isLoggedFunc() {
        let data = {}

        await axios.post('/profile/isLogged').then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        console.log(data.status)

        if (data.status === "ok") {
            this.isLogged = true;
        }
    }
}

export default new ProfileState();