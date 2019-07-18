import React, {useState} from "react"
import styled from "styled-components"
import '../components/layout.css'

import Layout from '../components/layout';
import TodoList from "../components/Todo";

const Container = styled(Layout)``;

const Title = styled.h1`
  background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
  -webkit-text-fill-color: transparent;background-color: #FBDA61;
  -webkit-background-clip: text;
`;

const IndexPage = () => {
  const [Todos, setTodo] = useState([]);
  const [newTodo, setContent] = useState('');

  const handleSubmit = () => {
    setTodo([
      ...Todos,
      {content: newTodo}
    ])
  }

// const Todos = [{content: "asdasd"}, {content: 'aaaa'}]

  const handleChange = (value) => {
    value && setContent(value);
  }

  return (
    <Container>
      <Title>Hello, This is Todo app made by Gatsby</Title>
      <div>
        <input onChange={(e) => handleChange(e.target.value)}/>
        <button onClick={handleSubmit}>Click me</button>
      </div>
      <TodoList todos={Todos} />
    </Container>
)}

export default IndexPage
