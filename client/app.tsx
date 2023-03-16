import React from 'react';
import { useState } from 'react';
import styled from './style.module.css';

export default function App() {
    return (
        <>
            <h1>Hello, world!</h1>
            <p className={styled.textRed}>Using CSS Module</p>
            <Counter />
        </>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            You clicked me {count} times
        </button>
    );
}
