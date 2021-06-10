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

    async changeName(email, name) {
        let data = {}

        await axios.post('/admin/users/changename', {
            name: name,
            email: email
        }).then(response => {
            data = response.data
        })

        if (data.status === "ok") return
    }
    async changeEmail(newEmail, lastEmail) {
        let data = {}

        await axios.post('/admin/users/changeemail', {
            newEmail: newEmail,
            lastEmail: lastEmail
        }).then(response => {
            data = response.data
        })

        if (data.status === "ok") return
    }
    async chanegePassword(password, email) {
        let data = {}

        await axios.post('/admin/users/changepassword', {
            password: password,
            email: email
        }).then(response => {
            data = response.data
        })

        if (data.status === "ok") return
    }

    async chanegeRole(role, email) {
        let data = {}

        await axios.post('/admin/users/changerole', {
            role: role,
            email: email
        }).then(response => {
            data = response.data
        })

        if (data.status === "ok") return
    }
}

export default new Users();