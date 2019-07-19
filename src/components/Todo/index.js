import React from 'react';
import styled from 'styled-components';
import TodoElement from './TodoElement';

const WrapTodo = styled.div`
    background: transparent;
    width: 400px;
`;

export default ({todos}) => {
    return(
    <WrapTodo>
        <TodoElement todos={todos} key={todos.key}/>
    </WrapTodo>
)}