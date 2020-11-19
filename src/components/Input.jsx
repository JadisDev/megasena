import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'

export default props => {
    return (
        <div>
            <Form.Control
                className="mb-2"
                type="number"
                value={props.number} onChange={e => {props.setNumberProps(e.target.value)}}
            />
        </div>
    )
}