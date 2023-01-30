import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../../api';
import { useQuery } from 'react-query';
import { Formik } from 'formik'

const ProductDetail = () => {
    const { product_id } = useParams();
    const { isError, isLoading, data, error } = useQuery(['admin:product', product_id], () => fetchProduct(product_id));
    if (isLoading) {
        return <>Loading</>
    }
    if (isError) {
        return <>{error.message}</>
    }

    const handleSubmit = _ => {
        console.log("submitted");
    }

    return (
        <div>
            <p style={{ marginTop: 10 }}>Ürün güncelleme paneli</p>
            <Formik
                initialValues={{
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    photos: data.photos
                }}
                //validationSchema
                onSubmit={handleSubmit}
            >

            </Formik>
        </div >
    )
}

export default ProductDetail