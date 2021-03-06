import { makeAutoObservable } from "mobx";
import axios from 'axios';
import download from 'downloadjs';

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
        this.files =  data;
    }

    async getUserFiles(id) {
        let data = {}

        await axios.post('/files/getfiles', {
            settings: "get user files",
            userId: id
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data));
        })
        this.files =  data;
    }

    async downloadFile(id, name) {
        let data = {};

        await axios.get('/files/downloadfile/' + id,
        {
            responseType: 'blob'
        }
        ).then((response) => {
            data = response.data;
        })

        download(data, name)
    }

}

export default new FilesState();