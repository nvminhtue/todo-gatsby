import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug: String!) {
        todosJson(slug: { eq: $slug }) {
            content
        }
    }
`;

console.log(query);

export default (props) => {
    const todo = props.data.todosJson;
    return (<div>
        <div>This is hard coded template</div>
        <div>{todo.content}</div>
        {/* <div dangerouslySetInnerHTML={{__html: pageContext.description}}></div> */}
    </div>)
};
