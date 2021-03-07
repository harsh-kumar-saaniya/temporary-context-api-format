import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return (
        <div>
            Har har mahadev
            <h4> The Counter Value is: {counterValue}</h4>
        </div>
    )
}

export default Child
