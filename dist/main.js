"use strict";
var React = require('react');
var react_dom_1 = require('react-dom');
var component_1 = require('./component');
var list_1 = require('./list');
var items_1 = require('./items');
exports.__hotReload = true;
var component = react_dom_1.render(React.createElement("div", null, 
    React.createElement("h1", null, 
        "Hallo ", 
        React.createElement(component_1.HelloComponent, null)), 
    React.createElement(list_1.HelloList, {items: items_1.testItems})), document.getElementById('app'));
//# sourceMappingURL=main.js.map