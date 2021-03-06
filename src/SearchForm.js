import React from 'react'
import { Form, Col } from 'react-bootstrap'

const SearchForm = ({ params, onParamsChange }) => {
    return (
        <div>
            <Form className="m-3">
                <Form.Row>
                    
                    <Form.Group as={Col} >
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={onParamsChange} value={params.description}
                        name="description" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={onParamsChange} value={params.location}
                        name="location" type="text" />
                    </Form.Group>

                </Form.Row>
            </Form >
        </div>
    )
}

export default SearchForm
