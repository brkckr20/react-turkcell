import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct, updateProduct } from '../../../api';
import { useQuery } from 'react-query';
import { Formik, FieldArray } from 'formik'
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import validationSchema from './validations'
import { message } from 'antd';

const ProductDetail = () => {
    const { product_id } = useParams();
    const { isError, isLoading, data, error } = useQuery(['admin:product', product_id], () => fetchProduct(product_id));
    if (isLoading) {
        return <>Loading...</>
    }
    if (isError) {
        return <>{error.message}</>
    }

    const handleSubmit = async (values, bag) => {
        message.loading({ content: "Loading", key: "product_update" });
        try {
            await updateProduct(values, product_id);
            message.success({ content: "Product successfully updated", key: "product_update", duration: 2 })
        } catch (error) {

        }
    }

    return (
        <div>
            <p style={{ marginTop: 10, fontSize: 30 }}>Ürün güncelleme paneli</p>
            <Formik
                initialValues={{
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    photos: data.photos
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
                        <>
                            <Box>
                                <Box my="5" textAlign="left">
                                    <form onSubmit={handleSubmit}>
                                        <FormControl>
                                            <FormLabel>Title</FormLabel>
                                            <Input name='title' onChange={handleChange} onBlur={handleBlur} value={values.title} disabled={isSubmitting} isInvalid={touched.title && errors.title} />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Description</FormLabel>
                                            <Textarea name='description' onChange={handleChange} onBlur={handleBlur} value={values.description} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Price</FormLabel>
                                            <Input name='price' onChange={handleChange} onBlur={handleBlur} value={values.price} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Photos</FormLabel>
                                            <FieldArray name='photos' render={(arrayHelpers) => (
                                                <div>
                                                    {
                                                        values.photos && values.photos.map((photo, i) => (
                                                            <div key={i}>
                                                                <Input name={`photos.${i}`} value={photo} disabled={isSubmitting} onChange={handleChange} width="4xl" />
                                                                <Button ml={4} type="button" colorScheme="red" onClick={() => arrayHelpers.remove(i)}>Remove</Button>
                                                            </div>
                                                        ))
                                                    }
                                                    <Button mt={5} onClick={() => arrayHelpers.push('')}>Add</Button>
                                                </div>
                                            )} />
                                        </FormControl>
                                        <Button mt={4} width="full" type='submit' isLoading={isSubmitting}>Update</Button>
                                    </form>
                                </Box>
                            </Box>
                        </>
                    )
                }
            </Formik>
        </div >
    )
}

export default ProductDetail