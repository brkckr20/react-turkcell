import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from 'react'

const Card = () => {
    return (
        <Box borderWidth={1} borderRadius="lg" overflow="hidden" p="3">
            <Link to="/#">
                <Image src="https://picsum.photos/id/237/300/300" alt="product" />
                <Box paddingTop={6}>
                    <Box display="flex" alignItems="baseline">
                        12/12/2022
                    </Box>
                    <Box mt={1} fontWeight="semibold" as="h4" lineHeight="tall">
                        Macbook Pro
                    </Box>
                    <Box mt={1}>
                        100 TL
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