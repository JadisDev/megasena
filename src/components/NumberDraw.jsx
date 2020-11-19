import React, {useState} from 'react'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import ChosenNumber from './ChosenNumber'
import Col from 'react-bootstrap/Col'

export default (props) => {

    const [number, setNumber] = useState(2)
    const [numbers, setNumbers] = useState([])

    const getButtonsUsingForLoop = () => {
        var array = [];
        numbers.map((value, i) => {
            array.push(
                <span key={props.i}>
                    <ChosenNumber i={i} number={value}/>
                </span>
            )
        })
        return array;
    }

    return (
        <div>
            <Col xs="auto">
                <h1>{props.title}</h1>
                <Label name="Quantos números quer gerar para mega sena?" />
                <Input number={number} setNumberProps={setNumber}></Input>
                <Button name="Gerar números aleatórios" number={number} setNumbers={setNumbers}></Button>
                <div>
                    {getButtonsUsingForLoop()}
                </div>
            </Col>
        </div>
    )
}