import React from 'react';
import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as Fa from '@fortawesome/free-solid-svg-icons';

const CheckIcon = styled(FontAwesomeIcon)`
    font-weight: 900;
`;

const WrapElement = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    font-weight: 200;
    background: #f2f3f5;
    border-top: 0.5px solid gray;
    border-radius: 20px;
    border-bottom: 0.5px solid gray;
    -webkit-box-shadow: 5px 5px 10px -5px rgba(117,117,117,0.8);
    -moz-box-shadow: 5px 5px 10px -5px rgba(117,117,117,0.8);
    box-shadow: 5px 5px 10px -5px rgba(117,117,117,0.8);
    margin: 10px 0;
`;

const Items = styled.label`
    display: block;
    width: 100%;
    position: relative;
    padding-left: 35px;
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
    &::after {
        ${props => css`
            content:  "\\${props.icon.icon[3]}";
        `}
        color: red;
        opacity: 0;
        transition: all .3s;
        font-family: 'Font Awesome\ 5 Free';
        font-weight: 900;
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
                    <Checkmark icon={faCheck} />
                </Items>
            </WrapElement>
            )
        })) : (
            <WrapElement>Nothing to show</WrapElement>
        )}
    </React.Fragment>
);