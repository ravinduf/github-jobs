import React from 'react'
import { Pagination } from 'react-bootstrap'

const JobsPagination = ( {page, setPage } ) => {
    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev/>}
            {page > 2 && <Pagination.Item>1</Pagination.Item>}
            {page > 3 && <Pagination.Ellipsis />}
            {page !== 1 && <Pagination.Item>{page - 1}</Pagination.Item> }
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Item>{page + 1}</Pagination.Item>
            <Pagination.Next/>
        </Pagination>

    )
}

export default JobsPagination
