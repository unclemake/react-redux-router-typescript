import * as react from 'react';


let a = react.createClass;

class view {
    constructor() {
        console.log(this.a);
    }
    a: 1
}

new view();