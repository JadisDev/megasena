import React, {useState} from 'react'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import ChosenNumber from './ChosenNumber'

export default (props) => {

    const [number, setNumber] = useState(1)
    const [numbers, setNumbers] = useState([])

    const getButtonsUsingForLoop = () => {
        var array = [];
        numbers.map((value, i) => {
            array.push(
                <div key={i}>
                    <ChosenNumber number={value}/>
                </div>
            )
        })
        return array;
    }

    return (
        <div>
            <Label name="Quantos números quer gerar?" />
            <Input number={number} setNumberProps={setNumber}></Input>
            <Button name="Gerar números aleatórios" number={number} setNumbers={setNumbers}></Button>
            {getButtonsUsingForLoop()}
        </div>
    )
}