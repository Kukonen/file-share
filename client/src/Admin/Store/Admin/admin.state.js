import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class AdminState {
    isAdmin = false

    constructor() {
        makeAutoObservable(this)
    }

    async setIsAdmin() {
        let data = {}
        await axios.get('/admin/isadmin').then(response => {
            data = response.data
        })
        if (data.status === "ok") {
            this.isAdmin = data.isAdmin
        }
    }
}

export default new AdminState();