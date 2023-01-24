import { Alert, Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../../context/BasketContext';

const Basket = () => {
    const { items, removeFromBasket } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0)
    return (
        <div>
            {items.length < 1 && <Alert status="warning"> Sepet boş </Alert>}

            {
                items.length > 0 && <>
                    <ul>
                        {
                            items.map(item => (

                                <li key={item._id} style={{ marginBottom: 10 }}>
                                    <Link to={`product/${item._id}`}>
                                        <Image htmlWidth={200} loading="lazy" src={item.photos[0]} />
                                        {item.title} - {item.price} tl
                                    </Link>
                                    <br />
                                    <Button mt="2" size="sm" colorScheme="red" onClick={() => removeFromBasket(item._id)}>
                                        Remove
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>
                </>
            }

            <Box mt={20}>
                Total : <Text as="span" bg="green.500" borderRadius={4} p={1} color="white">{total} TL</Text>
            </Box>
        </div>
    )
}

export default Basket