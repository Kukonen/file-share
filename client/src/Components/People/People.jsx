import React from 'react';
import PeopleState from '../../Store/People/people.state';
import './People.css';
import {observer} from 'mobx-react-lite';

const People = observer(() => {
    PeopleState.getAllPeople();

    const people = PeopleState.people.map((person) => (
        <li className="list-group-item" key = {person.id}>{person.name}</li>
    ))

    if (people.length !== 0) {
        return (
        <div>
            <ul className="People list-group list-group-flush">
                {people}
            </ul>
        </div>
    )
    }
    else {
        return (
            <div>
                <h3>
                    Not a single user on this site...
                </h3>
            </div>
        )
    }
    
})

export default People;