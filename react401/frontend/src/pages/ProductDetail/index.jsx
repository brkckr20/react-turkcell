import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../api';
import { Box, Text, Button } from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetail = () => {
    const { product_id } = useParams();
    const { data, isLoading, isError } = useQuery(["product", product_id], () => fetchProduct(product_id))

    if (isLoading) {
        return <div>Loading</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    // console.log(data);

    const images = data.photos.map((url) => ({ original: url }));

    return (
        <div>
            <Button colorScheme="pink">Add to basket</Button>
            <Text as="h2">{data.title}</Text>
            <Text as="h2">{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
            <p>
                {data.description}
            </p>
            <Box margin="10">
                <ImageGallery items={images} />
            </Box>
        </div>
    )
}

export default ProductDetail