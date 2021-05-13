import { makeAutoObservable } from "mobx";
import axios from 'axios';

class FilesState {

    file = {}

    constructor() {
        makeAutoObservable(this);
    }

    changeFile(file) {
        this.file = file.target.files[0];
    }

    async isLogin() {
        let data = {}

        await axios.get('/files/isLogin').then((response) => {
            data = JSON.parse(JSON.stringify(response.data));
        })
        return data;
    }

    async sendFile() {
        let formData = new FormData();
        formData.append("file", this.file);
        let isLogin = await this.isLogin();

        if (isLogin.status === "ok") {
            alert("here");
        } else if (isLogin.status === "not found") {
            alert("here 2")
        }
    }

}

export default new FilesState();