import React from 'react';
import styled from 'styled-components';
import TodoElement from './TodoElement';

const WrapTodo = styled.div`
    background: #f2f3f5;
    width: 400px;
    border-left:  0.5px solid gray;
    border-right:  0.5px solid gray;
    border-radius: 4px;
`;

export default ({todos}) => (
    <WrapTodo>
        <TodoElement todos={todos} key={todos.key}/>
    </WrapTodo>
)