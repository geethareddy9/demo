import { useState, useEffect } from 'react';
import axios from 'axios';
import Contact from './Contact';

function Prayer() {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        axios.get('/ping')
        .then(response => {
            console.log(response);
        });
    }, [ counter ])

    const increment =()  => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            Welcome to Prayer {counter}
            <button onClick={increment}>+</button> &nbsp;
            <button onClick={decrement}>-</button>
            {counter > 5 && <Contact type="Prayer" setCounter={setCounter} name="contact"/>}
        </div>
    )
}

export default Prayer;