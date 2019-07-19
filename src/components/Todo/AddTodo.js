import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const WrapAddTodo = styled.div``;
const Input = styled.input`
    text-indent: 10px;
`;
const SubmitButton = styled.button``;
const CancelButton = styled.button``;
const AddButton = styled.button``;
const AddModal = styled(Modal)`
    background: white;
    border: 1px solid cyan;
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
        setTodo([
            ...Todos,
            { content: newTodo }
        ])
    }

    const handleChange = (value) => {
        value && setContent(value);
    }
    return (
        <WrapAddTodo>
            <i class="fas fa-check"></i>
            <AddButton onClick={() => setOpen(true)} />
            <AddModal isOpen={isOpen}>
                <Input onChange={(e) => handleChange(e.target.value)} />
                <SubmitButton onClick={handleSubmit}>Click me</SubmitButton>
                <CancelButton onClick={() => setOpen(false)}>Close</CancelButton>
            </AddModal>
        </WrapAddTodo>
)}