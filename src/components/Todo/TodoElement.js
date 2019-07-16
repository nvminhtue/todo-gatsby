import React from 'react';
import styled from 'styled-components';

const WrapElement = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    font-weight: 200;
    :nth-child(1) {
      border-top: 0.5px solid gray;
    }
    border-bottom: 0.5px solid gray;
`;

const Items = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    :hover {
        background-color: #ccc;
    }
`;

export default ({todos}) => (
    <React.Fragment>
        {
            todos.length > 0 ? (todos.map((todo, index) => {
            return (
                <WrapElement key={index}>
                <Items>
                    <Checkbox type="checkbox" />
                    {todo.content}
                    <Checkmark />
                </Items>
            </WrapElement>
            )
        })) : (
            <WrapElement>Nothing to show</WrapElement>
        )}
    </React.Fragment>
);