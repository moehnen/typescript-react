"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var component_1 = require('./component');
var list_1 = require('./list');
var testItems = [
    { id: 1, text: "typescript" },
    { id: 2, text: "react" },
    { id: 3, text: "systemjs" },
];
ReactDOM.render(React.createElement("div", null, 
    React.createElement("h1", null, 
        "Hello ", 
        React.createElement(component_1.HelloComponent, null)), 
    React.createElement(list_1.HelloList, {data: testItems})), document.getElementById('app'));
//# sourceMappingURL=main.js.map