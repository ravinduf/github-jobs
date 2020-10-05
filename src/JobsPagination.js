import React from 'react'
import { Pagination } from 'react-bootstrap'

const JobsPagination = ( {page, setPage } ) => {
    return (
        <Pagination>
            <Pagination.Prev/>
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next/>
        </Pagination>

    )
}

export default JobsPagination
