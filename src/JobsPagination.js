import React from 'react'
import { Pagination } from 'react-bootstrap'

const JobsPagination = ( {page, setPage } ) => {
    return (
        <Pagination>
            <Pagination.Prev/>
            <Pagination.Next/>
        </Pagination>

    )
}

export default JobsPagination
