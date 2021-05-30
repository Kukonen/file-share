import axios from 'axios';
import {makeAutoObservable} from 'mobx'

class Users {
    users = []

    constructor() {
        makeAutoObservable(this)
    }

    async getUsers() {
        let data = {}

        await axios.get('/admin/users/getusers').then(response => {
            data = response.data
        })

        if (data.status === "ok") {
            this.users = data.users
        }
    }
}

export default new Users();