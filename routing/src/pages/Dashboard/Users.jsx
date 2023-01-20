import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link to={`${user.id}`} state={user} >{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users