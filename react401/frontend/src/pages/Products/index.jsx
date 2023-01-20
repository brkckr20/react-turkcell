import React from 'react'
import { Box, Button, Grid } from "@chakra-ui/react";
import Card from '../../components/Card'
import { useInfiniteQuery } from 'react-query'
import { fetchProductList } from '../../api'

const Products = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('products', fetchProductList, {
        getNextPageParam: (lastGroup, allGroups) => {
            const morePagesExist = lastGroup?.length === 12;
            if (!morePagesExist) {
                return;
            }
            return allGroups.length + 1
        }
    });
    if (status === "loading") {
        return 'Loading'
    }
    if (status === "error") {
        return error.message
    }
    return (
        <div>
            <Grid templateColumns="repeat(6,1fr)" gap={4}>
                {/* {
                    data.pages.map(item => (
                        <Card key={item._id} item={item} />
                    ))
                } */}
                {
                    data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.map((item, k) => (
                                    <Box width="100%" key={k}>
                                        <Card item={item} />
                                    </Box>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </Grid>
            <Box textAlign="center">
                <Button
                    colorScheme="linkedin"
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    isLoading={isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Daha fazlası yükleniyor'
                        : hasNextPage
                            ? 'Daha fazla gör'
                            : 'Daha fazla yok'
                    }
                </Button>
            </Box>
        </div>
    )
}

export default Products