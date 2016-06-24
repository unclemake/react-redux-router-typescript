(function () {
    var path = window.location.protocol + '//' + window.location.host;

    console.log(path)
    seajs.config({
        //js模块路径
        base: path,
        alias: {
            'react': 'node_modules/react/dist/react.min.js',
            'redux': 'node_modules/redux/dist/redux.min.js',
            'react-redux': "node_modules/react-redux/dist/react-redux.min.js",
            'react-dom': "node_modules/react-dom/dist/react-dom.min.js",
            'react-router': "node_modules/react-router/umd/ReactRouter.min.js",
            'redux-actions': "node_modules/redux-actions/lib/index.js",
            'redux-thunk': "node_modules/redux-thunk/lib/index.js",
            'reduce-reducers': "node_modules/reduce-reducers/lib/index.js"
        }
    });
}());
