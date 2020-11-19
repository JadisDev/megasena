import React from 'react'
import Form from 'react-bootstrap/Form'

export default props => {
    return (
        <div>
            <Form.Label>{props.name}</Form.Label>
        </div>
    )
}