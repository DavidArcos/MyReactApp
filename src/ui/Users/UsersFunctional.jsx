import React, { useState, Fragment } from 'react';
import Button from "../../components/Button/Button";

const UsersFunctional = () => {

    const [ users, setUsers ] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(jsonThing => setUsers(jsonThing))
    // },[]);
    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(jsonThing => setUsers(jsonThing))
    }
    return (
        <Fragment>
        <ul>
            {
                users.map((user,i) => {
                    return (
                        <li key={i}>
                            {user.name}     
                        </li>
                    )
                })
            }
        </ul>
        <Button className="btn" text="Load Users" onClick={fetchUsers} />
        </Fragment>
    );
};

export default UsersFunctional;