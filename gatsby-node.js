// //Absolute imports: instead of (import ABC from '../../components/ABC'), it helps to (import ABC from 'components/ABC')
const path = require('path');

exports.onCreateWebpackConfig = ({ state, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        }
    })
}
