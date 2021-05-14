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
        
        let isLogin = await this.isLogin();


        if (isLogin.status === "not found") {
            return;
        }
        else if (isLogin.status === "ok") {
            let formData = new FormData();
            formData.append("file", this.file);
            await axios.post('/files/sendFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                
            })
        }
    }

}

export default new FilesState();