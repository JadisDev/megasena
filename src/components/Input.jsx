import React, {useState} from 'react'

export default props => {
    return (
        <div>
            <input type="number" value={props.number} onChange={e => {props.setNumberProps(e.target.value)}}></input>
        </div>
    )
}