import React, { FC } from 'react';
import { useState } from 'react';

import styled from 'styled-components';
import cssModuleStyled from './style.module.css';
import { IApiResponse } from '../types/api.type';

declare global {
    interface Window {
        __SERVER_DATA__: any;
    }
}

const Title = styled.div`
    font-size: 32px;
    color: blue;
`;

interface Props {
    serverData: IApiResponse | null;
}

const App: FC<Props> = ({ serverData }) => {
    const [userInfo, setUserInfo] = useState<IApiResponse>(() => {
        if (serverData) {
            return serverData;
        } else {
            return {
                name: '',
                job: '',
            };
        }
    });

    return (
        <>
            <h1>Hello, world!</h1>
            <Title>Title from styled-components</Title>
            <p className={cssModuleStyled.textRed}>Using CSS Module</p>
            <div>
                <p>Server Data</p>
                <p>Name : {userInfo.name || '-'}</p>
                <p>Job : {userInfo.job || '-'}</p>
            </div>
            <Counter />
        </>
    );
};

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            You clicked me {count} times
        </button>
    );
}

export default App;
