import React from 'react';
import { useQuery } from 'react-query';
import { fetchProductList } from '../../../api';
import { Table, Popconfirm } from 'antd';
import { Link } from 'react-router-dom'

const Products = () => {
    const { isLoading, isError, data, error } = useQuery("admin:products", fetchProductList);
    if (isLoading) {
        return <div>Yükleniyor</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }


    const columns = [
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
                        onConfirm={() => alert("silindi")}
                        onCancel={() => console.log("iptal edild")}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <a href="/#">Delete</a>
                    </Popconfirm>
                </>
            )
        }
    ];
    return (
        <div>
            <p>Products</p>
            <Table dataSource={data} columns={columns} rowKey={"_id"}>Products</Table>
        </div>
    )
}

export default Products