import { Alert } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <Alert status='error'>
            <p>Aradığınız sayfa bulunamadı <br /><Link to="/" style={{ fontWeight: "bold" }}>Anasayfa</Link>'ya git</p>
        </Alert>
    )
}

export default Error404