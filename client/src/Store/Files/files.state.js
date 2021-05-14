import { makeAutoObservable } from "mobx";
import axios from 'axios';

class FilesState {

    file = {}
    files = {}

    constructor() {
        makeAutoObservable(this);
    }

    changeFile(file) {
        this.file = file.target.files[0];
    }

    async isLogin() {
        let data = {}

        await axios.get('/files/islogin').then((response) => {
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
            await axios.post('/files/sendfile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {})
        }
    }

    async getOwnFiles() {
        let data = {}

        await axios.post('/files/getfiles', {
            settings: "own files"
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data));
        })
        console.log(data);
        this.files = JSON.parse(JSON.stringify(data));
        console.log(this.files);
        
    }

}

export default new FilesState();