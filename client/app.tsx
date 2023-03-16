import React from 'react';
import { useState } from 'react';
import cssModuleStyled from './style.module.css';
import styled from 'styled-components';

const Title = styled.div`
    font-size: 32px;
    color: blue;
`;

export default function App() {
    return (
        <>
            <h1>Hello, world!</h1>
            <Title>Title from styled-components</Title>
            <p className={cssModuleStyled.textRed}>Using CSS Module</p>
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
