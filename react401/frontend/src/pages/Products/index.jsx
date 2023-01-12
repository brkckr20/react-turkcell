import React from 'react'
import { Grid } from "@chakra-ui/react";

import Card from '../../components/Card'

const Products = () => {
    return (
        <div>
            <Grid templateColumns="repeat(6,1fr)" gap={4}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </Grid>
        </div>
    )
}

export default Products