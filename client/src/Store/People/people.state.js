import {makeAutoObservable} from 'mobx';
import axios from 'axios';

class PeopleState {

    people = [];

    personName = null;

    constructor() {
        makeAutoObservable(this);
    }

    async getAllPeople() {
        let data = {}
        await axios.get('/people/getallpeople').then( response =>
            data = JSON.parse(JSON.stringify(response.data))
        )
        this.people = data;
    }

    async getOne() {

        const path = window.location.href.split('/');
        
        if (path.length !== 5)
            return;
        let data = {};
        await axios.post('/people/:id', {id: path[4]}).then( response =>
            data = JSON.parse(JSON.stringify(response.data))
        )
        console.log(data.name)
        if (data.status === "find user") {
            this.personName = data.name;
        }
    }
}

export default new PeopleState();