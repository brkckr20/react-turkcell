import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const [user, setUser] = useState(location.state)

    useEffect(() => {
        if (!user?.id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(data => setUser(data));
        }
    }, [user, id])
    return (
        <div>
            <h2>Kullanıcı Detayları</h2>
            <div style={{ maxWidth: 200 }}>

                {
                    user && <pre>
                        {
                            JSON.stringify(user, null, 2)
                        }
                    </pre>
                }
            </div>
            <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
        </div>
    )
}

export default UserDetail