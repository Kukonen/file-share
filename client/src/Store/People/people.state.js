import {makeAutoObservable} from 'mobx';
import axios from 'axios';

class PeopleState {

    people = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getAllPeople() {
        let data = {}
        await axios.post('/people/getallpeople').then( response =>
            data = JSON.parse(JSON.stringify(response.data))
        )
        this.people = data;
    }
}

export default new PeopleState();