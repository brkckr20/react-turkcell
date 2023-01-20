import React from 'react'
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from 'moment'

const Card = ({ item }) => {
    return (
        <Box borderWidth={1} borderRadius="lg" overflow="hidden" p="3">
            <Link to={`/product/${item._id}`}>
                <Image src={item.photos[0]} alt="product" loading='lazy' />
                <Box paddingTop={6}>
                    <Box display="flex" alignItems="baseline">
                        {moment(item.createdAt).format('DD/MM/YYYY')}
                    </Box>
                    <Box mt={1} fontWeight="semibold" as="h4" lineHeight="tall">
                        {item.title}
                    </Box>
                    <Box mt={1}>
                        {item.price} TL
                    </Box>
                </Box>
            </Link>
            <Button colorScheme="pink">
                Add to basket
            </Button>
        </Box>
    )
}

export default Card