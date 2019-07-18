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
    width: 100%;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
`;

const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
        .checkmark {
            background-color: #2196F3;
        }
        + span  {
            border: 1px solid red;
            background: white;

            &:after {
                opacity: 1;
            }
        }
    }
`;

const Checkmark = styled.span`
    display: block;
    position: absolute;
    top: 0;
    right: 10px;
    height: 25px;
    width: 25px;
    border-radius: 100%;
    background-color: white;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
        opacity: 0;
        color: red;
        font-family: "FontAwesome";
        content: '\f00c';
        font-size: 16px;
        transition: all .3s;
    }
`;

export default ({todos}) => (
    <React.Fragment>
        {
            todos.length > 0 ? (todos.map((todo, index) => {
            return (
                <WrapElement key={index}>
                <Items>
                    {todo.content}
                    <Checkbox type="checkbox" />
                    <Checkmark />
                </Items>
            </WrapElement>
            )
        })) : (
            <WrapElement>Nothing to show</WrapElement>
        )}
    </React.Fragment>
);