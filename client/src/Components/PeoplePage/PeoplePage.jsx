import React from 'react';
import PeopleState from '../../Store/People/people.state';
import './PeoplePage.css';
import {observer} from 'mobx-react-lite';

const People = observer(() => {
    PeopleState.getAllPeople();

    const people = PeopleState.people.map((person) => (
        <li className="list-group-item" key = {person.id}>
            <a href={"/user/" + person.id} className="nav-link">{person.name}</a>
        </li>
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