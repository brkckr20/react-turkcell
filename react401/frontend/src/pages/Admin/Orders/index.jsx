import React from 'react'
import { useQuery } from 'react-query';
import { fetchOrders } from '../../../api';
import { Table, Thead, Tbody, Tr, Td, Th, TableCaption, Text } from '@chakra-ui/react'
import { useEffect } from 'react';

const Orders = () => {
    const { isLoading, isError, data, error } = useQuery("admin:orders", fetchOrders);
    if (isLoading) {
        return <div>loading</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <div>
            <Text fontSize="2xl">Orders</Text>
            <Table variant="simple">
                <TableCaption>No data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Address</Th>
                        <Th>Item</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(item => (
                            <Tr key={item._id}>
                                <Td>{item.user.email}</Td>
                                <Td>{item.adress}</Td>
                                <Td isNumeric >{item.items.length}</Td>
                            </Tr>
                        ))
                    }

                </Tbody>
            </Table>
        </div>
    )
}

export default Orders