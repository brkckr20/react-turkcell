import { Button } from '@chakra-ui/react';
import React from 'react'
import { useAuth } from '../../../context/AuthContext';

const Profile = ({ history }) => {
    const { user, logout } = useAuth();
    const handleLogout = async () => {
        logout(() => {
            history.push("/")
        })
    }
    return (
        <div>
            <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>Profile</h1>
            <code>
                {
                    JSON.stringify(user)
                }
            </code>
            <br />
            <br />
            <Button colorScheme="red" variant="solid" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile