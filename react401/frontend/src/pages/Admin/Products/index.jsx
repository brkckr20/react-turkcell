import React, { useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchProductList, deleteProduct } from '../../../api';
import { Table, Popconfirm } from 'antd';
import { Link } from 'react-router-dom'

const Products = () => {
    const queryClient = useQueryClient();
    const { isLoading, isError, data, error } = useQuery("admin:products", fetchProductList);
    if (isLoading) {
        return <div>Yükleniyor</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    const deleteMutation = useMutation(deleteProduct, {
        refetchQueries: ["admin:products"]
    })



    const columns = useMemo(() => {
        return [
            {
                title: "Title",
                dataIndex: "title",
                key: "title"
            },
            {
                title: "Price",
                dataIndex: "price",
                key: "price"
            },
            {
                title: "Created At",
                dataIndex: "createdAt",
                key: "createdAt"
            },
            {
                title: "Action",
                key: "action",
                render: (text, record) => (
                    <>
                        <Link to={`/admin/products/${record._id}`}>Edit</Link>
                        <Popconfirm
                            title="Silinsin mi?"
                            onConfirm={() => {
                                deleteMutation.mutate(record._id, {
                                    onSuccess: () => {
                                        queryClient.invalidateQueries("admin:products")
                                    }
                                });
                            }}
                            onCancel={() => console.log("iptal edild")}
                            okText="Yes"
                            cancelText="No"
                            placement='left'
                        >
                            <a href="/#" style={{ marginLeft: 10 }}>Delete</a>
                        </Popconfirm>
                    </>
                )
            }
        ]
    }, [])
    return (
        <div>
            <p>Products</p>

            <Table dataSource={data} columns={columns} rowKey={"_id"}>Products</Table>
        </div>
    )
}

export default Products