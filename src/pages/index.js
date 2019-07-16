import React, {useState, useEffect} from "react"
import styled from "styled-components"

import Layout from '../components/layout';
import TodoList from "../components/Todo";

const Container = styled(Layout)``;

const Title = styled.h1`
  background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
  -webkit-text-fill-color: transparent;background-color: #FBDA61;
  -webkit-background-clip: text;
`;

const IndexPage = () => {
  const [Todos, setTodo] = useState({});
  const [newTodo, setContent] = useState('');
  useEffect({
    
  }, [Todos])
  return (
    <Container>
      <Title>Hello, This is Todo app made by Gatsby</Title>
      <div>
        <input onChange={(e) => setContent(e.target.value !== '' && e.target.value)}/>
        <button onClick={setTodo({...Todos, content: newTodo})}>Click me</button>
      </div>
      <TodoList todos={Todos} />
    </Container>
)}

export default IndexPage
