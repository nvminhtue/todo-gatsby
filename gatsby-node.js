// //Absolute imports: instead of (import ABC from '../../components/ABC'), it helps to (import ABC from 'components/ABC')
// const path = require('path');

// exports.onCreateWebpackConfig = ({ state, actions }) => {
//     actions.setWebpackConfig({
//         resolve: {
//             modules: [path.resolve(__dirname, "src"), "node_modules"],
//         }
//     })
// }


exports.createPages = async ({ actions:  { createPage }, graphql}) => {
    const results = await graphql(`
        {
            allTodosJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    results.data.allTodosJson.edges.forEach(edge => {
        const todo = edge.node
        createPage({
            path: `/todo/${todo.slug}/`,
            component: require.resolve("./src/hard-coded-page/index.js"),
            context: {
                slug: todo.slug,
            }
        })
    })
}