import React from 'react'
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from 'moment'
import { useBasket } from '../../context/BasketContext';

const Card = ({ item }) => {
    const { addToBasket, items } = useBasket();
    const findBasketItem = items.find((basket_item) => basket_item._id === item._id)
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
            <Button colorScheme={findBasketItem ? "gray" : "blackAlpha"}
                onClick={() => {
                    addToBasket(item, findBasketItem)
                }}
            >
                {
                    findBasketItem ? 'Remove Basket' : 'Add Basket'
                }
            </Button>
        </Box>
    )
}

export default Card