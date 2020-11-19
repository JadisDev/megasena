import React, {useState} from 'react'

export default props => {

    function generateRandomNumber(amount) {
        let numbers = [];
        for(var i=1; i <= amount; i++) {
            addNumber(numbers)
        }
        numbers.sort(function(a, b){return a-b});
        props.setNumbers(numbers)
    }

    function addNumber(numbers) {
        let numberRandom = randomInt(1, 100)
        if (numbers.indexOf(numberRandom) === -1) {
            numbers.push(numberRandom)
        } else {
            addNumber(numbers)
        }
    }

    function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }

    return (
        <div>
            <button onClick={e => {generateRandomNumber(props.number)}}>{props.name}</button>
        </div>
    )
}