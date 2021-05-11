import {makeAutoObservable} from 'mobx';
import Cookies from 'js-cookie';

class UserState {

    name = '';

    constructor() {
        makeAutoObservable(this);
        if (Cookies.get('name')) this.name = Cookies.get('name');
    }
}

export default new UserState();