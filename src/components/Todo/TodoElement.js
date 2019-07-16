import React from 'react';
import styled from 'styled-components';

const WrapElement = styled.div`
    height: 50px;
    width: 100%;
    font-weight: 200;
    border-bottom: 0.5px solid gray;
`;

export default ({todos}) => {
    return ( todos && todos.map((todo, index) => (
        <WrapElement key={index}>
            {todo.content}
        </WrapElement>
    )))
};