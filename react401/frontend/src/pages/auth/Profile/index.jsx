import React from 'react'
import { useAuth } from '../../../context/AuthContext';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>Profile</h1>
            <code>
                {
                    JSON.stringify(user)
                }
            </code>
        </div>
    )
}

export default Profile