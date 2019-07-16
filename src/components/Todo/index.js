import React from 'react';
import styled from 'styled-components';
import TodoElement from './TodoElement';

const WrapTodo = styled.div`
    background: #f2f3f5;
    height: 400px;
    width: 400px;
`;

export default ({todos}) => (
    <WrapTodo>
        <TodoElement todos={todos} key={todos.key}/>
    </WrapTodo>
)