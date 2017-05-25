const gulp = require('gulp');
const typedoc = require("gulp-typedoc");
const cp = require('child_process');
const axiba = require("axiba");
const { config } = axiba;
const tsconfig = require(process.cwd() + '/tsconfig.json').compilerOptions;

config.mainModules = [];
config.mainFile = [
    // 'components/egret/egret.min.js',
];
config.merge = 'dist/pages/*/index-????????.js';
config.paths = {
    '@components': 'components'
};
config.devPort = '8081'

gulp.task('default', function () {
    return axiba.init()
        .then(value => axiba.serverRun())
        .then(value => axiba.watch())
        .then(value => cp.exec('start http://localhost:' + config.devPort));
});

gulp.task('release', function () {
    return axiba.release().then(value => axiba.serverRun());
});

gulp.task("docs", function () {
    return gulp
        .src(["./assets/**/*.ts", "./assets/**/*.tsx"])
        .pipe(typedoc({
            module: tsconfig.module,
            target: 'es6',
            jsx: tsconfig.jsx,
            paths: {
                "@components/*": [
                    "assets/components/*"
                ]
            },
            allowSyntheticDefaultImports: true,
            baseUrl: "./",
            incloude: ["./node_modules/@types", "./node_modules/antd"],


            includeDeclarations: false,
            experimentalDecorators: true,

            // Output options (see typedoc docs) 
            out: "./docs",

            // TypeDoc options (see typedoc docs) 
            name: "MyProject",
            ignoreCompilerErrors: true,
            excludeExternals: true,
            version: true,
        }))
});


gulp.task('opendoc', function () {
    return cp.exec('start http://localhost:' + config.devPort + '/docs/index.html');
});
