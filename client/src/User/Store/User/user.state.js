import {makeAutoObservable} from 'mobx';
import Cookies from 'js-cookie';
import axios from 'axios';


class UserState {

    name = '';

    constructor() {
        makeAutoObservable(this);
        if (!(sessionStorage.getItem('remember') || localStorage.getItem('remember'))) {
            this.isLogged = false;
            axios.post('/profile/logout').then()
            Cookies.remove('name');
            this.name = '';
            sessionStorage.setItem('remember', false);
            localStorage.removeItem('remember');
        }
        if (Cookies.get('name')) this.name = Cookies.get('name');
    }
}

export default new UserState();