import React, {useState} from "react"
import styled from "styled-components"

import Layout from '../components/layout';
import TodoList from "../components/Todo";

const Container = styled(Layout)``;

const Title = styled.h1`
  background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
  -webkit-text-fill-color: transparent;background-color: #FBDA61;
  -webkit-background-clip: text;
`;

const Todos = [{content: 'aaa'}, {content: 'bbb'}];

const IndexPage = () => {
  const [noob, setNoob] = useState('ahihi');
  return (
    <Container>
      <Title>Hello, This is Todo app made by Gatsby {noob}</Title>
        <TodoList todos = {Todos} />
      {/* <div>
        <input onChange={(e) => setNoob(e.target.value)}/>
        <button>Click me</button>
      </div> */}
    </Container>
)}

export default IndexPage
