import React from 'react'
import { Pagination } from 'react-bootstrap'

const JobsPagination = ( {page, setPage , hasNextPage } ) => {
    
    const changePage = (amount) => {
        setPage(PrevPage => PrevPage + amount)
    }
    
    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => changePage(-1)}/>}
            {page > 2 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
            {page > 3 && <Pagination.Ellipsis />}
            {page !== 1 && <Pagination.Item onClick={() => changePage(-1)}>{page - 1}</Pagination.Item> }
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={() => changePage(1)}>{page + 1}</Pagination.Item>}
            {hasNextPage && <Pagination.Next/>}
        </Pagination>

    )
}

export default JobsPagination
