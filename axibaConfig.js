
module.exports = {
    concat: [
           {
               name: "index.js",
               dest: "assets/components/global/",
               list: [
                   "assets/components/global/node.js",
                   "assets/components/global/typescript.js",

                   "node_modules/seajs/dist/sea.js",
                   "node_modules/seajs-css/dist/seajs-css.js",
                   "assets/components/global/config.js",


                   "node_modules/react/dist/react.js",
                   "node_modules/redux/dist/redux.js",
                   "node_modules/react-redux/dist/react-redux.js",
                   "node_modules/react-dom/dist/react-dom.min.js",
                   "node_modules/react-router/umd/ReactRouter.min.js",
                   "node_modules/lodash/lodash.js",

                   'redux-thunk',
                   'reduce-reducers',
                   'flux-standard-action',
                   'redux-actions',
                   'react-router-redux'
               ]
           }
    ],
    alias: {
        'react': 'node_modules/react/dist/react.min.js',
        'redux': 'node_modules/redux/dist/redux.min.js',
        'react-redux': "node_modules/react-redux/dist/react-redux.min.js",
        'react-dom': "node_modules/react-dom/dist/react-dom.min.js",
        'react-router': "node_modules/react-router/umd/ReactRouter.min.js"
    }
}
