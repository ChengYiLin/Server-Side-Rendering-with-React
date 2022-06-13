import React, { FC } from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 3rem;
    color: red;
`;

const Hi: FC = () => {
    return (
        <div>
            <Title>This is Hi Page</Title>
        </div>
    );
};

export default Hi;
