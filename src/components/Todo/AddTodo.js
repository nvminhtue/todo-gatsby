import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const WrapAddTodo = styled.div``;

const Input = styled.input`
    text-indent: 10px;
`;

const SubmitButton = styled.button``;

const CancelButton = styled.button``;

const Button = styled.h1`
    background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
    -webkit-text-fill-color: transparent;background-color: #FBDA61;
    -webkit-background-clip: text;
    cursor: pointer;
    margin-top: -14px;
`;

const WrapButton = styled.div`
    border-radius: 20px;
    border: 4px solid white;
    height: 30px;
`;

const AddModal = styled(Modal)`
    background: white;
    border: 1px solid white;
    border-radius: 5px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export default ({Todos, setTodo}) => {
    const [newTodo, setContent] = useState('');
    const [isOpen, setOpen] = useState(false);
    const handleSubmit = () => {
        newTodo && setTodo([
            ...Todos,
            { content: newTodo }
        ])
        setContent('');
        setOpen(false);
    }

    const handleChange = (value) => {
        value && setContent(value);
    }
    return (
        <WrapAddTodo>
            <WrapButton>
                <Button onClick={() => setOpen(true)} icon={faPlus}>+</Button>
            </WrapButton>
            <AddModal isOpen={isOpen}>
                <Input onChange={(e) => handleChange(e.target.value)} />
                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                <CancelButton onClick={() => setOpen(false)}>Close</CancelButton>
            </AddModal>
        </WrapAddTodo>
)};